import { Injectable, NgZone } from '@angular/core';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { UsuariosProps } from './Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user: any) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || '{}')
      }
    })
  }

  signIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  registerUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // para verficiar que el correo existe
  verificationEmail() {
    return this.ngFireAuth.currentUser.then((user: any) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['/login']);
      })
    })
  }

  passwordRecovery(passwordResetEmail: string) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Se ha enviado un correo para restablecer la contraseña')
      }).catch((err: any) => {
        window.alert(err);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return user !== '' && user.emailVerified !== false ? true : false;
  }
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return user.emailVerified !== false ? true : false;
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `user/${user.uid}`
    );
    const userData: UsuariosProps = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVefiried: user.emailVefiried
    }
    return userRef.set(userData, { merge: true });
  }

  authLogin(provider: any) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
        // falta un metodo
        this.setUserData(result.user);
      }).catch((err: any) => {
        window.alert(err)
      })
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  signOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    })
  }

}
