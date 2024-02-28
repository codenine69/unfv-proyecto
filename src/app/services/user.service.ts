import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import {Firestore, collection, addDoc, doc, setDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth,private firestore: Firestore) {  }

  register2({email, password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
  async register({ email, password, nombre, apellido }: any) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      if (user) {
        // Guardar información adicional en Firestore
        const userDocRef = doc(this.firestore, 'users', user.uid); // Crear referencia al documento del usuario
        const userData = { // Objeto con los datos adicionales del usuario
          nombre: nombre,
          apellido: apellido
          // Añade aquí otros campos si es necesario
        };
        await setDoc(userDocRef, userData); // Guardar los datos en Firestore
      }

      return userCredential;
    } catch (error) {
      throw error;
    }
  }
 
  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

}
 