import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    beginnersCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(
      private router: Router,
      private db: AngularFirestore) {

    }

    ngOnInit() {
      this.beginnersCourses$ = this.getCoursesByCategory("BEGINNER");
      this.advancedCourses$ = this.getCoursesByCategory("ADVANCED");
    }

    getCoursesByCategory(category): Observable<Course[]> {
      return this.db.collection(
          "courses",
          ref => ref.where("categories", "array-contains", category)
        ).get().pipe(
          map(results => results.docs.map(doc => {
            return {
              id: doc.id,
              ...<any>doc.data()
            }
          }))
        );
    }

}
