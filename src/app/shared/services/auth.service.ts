import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userChecked = false;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { }


  isLogin(): boolean {
    return this.userChecked;
  }

  signUp(email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userResponse => {
        console.log(userResponse);
        const user = {
          id: userResponse.user.uid,
          userName: userResponse.user.email,
          role: 'user'
        };
        // this.firestore.collection('users').doc('user_1').set(user).then(data => {
        //   console.log(data);
          
        // })
        this.firestore.collection('users').add(user)
          .then(user => {
            user.get().then(x => console.log(x.data()))
            console.log(user);
          })
          .catch(err => {
            console.log('Add to firestore', err);
          })
      })
  }

  signIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(data => {
        this.firestore.collection('users').ref.where('userName', '==', data.user.email)
          .onSnapshot(snap => {
            snap.forEach(userRef => {
              const currentUser: any = userRef.data();
              console.log(userRef.data());
              if(currentUser.role === 'admin') {
                this.userChecked = true;
                this.router.navigate(['/admin'])
                
              }
              else if(currentUser.role === 'user') {
                alert('USER !!!')
              }
              else {
                this.router.navigate(['/'])
              }
            })
          })
      })
      .catch(err => console.log(err))
  }
}

