import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	NextOrObserver
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { Category } from "../../store/categories/categories.types";


const firebaseConfig = {
	apiKey: "AIzaSyCKhVSsDiv6Z7I7W5_EipxeDZ4caR_azhM",
	authDomain: "react-test-db-f6a7f.firebaseapp.com",
	projectId: "react-test-db-f6a7f",
	storageBucket: "react-test-db-f6a7f.appspot.com",
	messagingSenderId: "791664432025",
	appId: "1:791664432025:web:b6e22ed61f5b097b17b908",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// dla interface Google do wyboru konta Google użytkownika
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// utworzenie bazy
export const db = getFirestore();

export type ObjectToAdd = {
	title: string;
};

// dodawanie kolekcji i dokumentów do Firestore
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(collectionKey: string, objectsToAdd: T[]): Promise<void> => {
	const collectionRef = collection(db, collectionKey);

	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();

};


//pobranie danych z Firestore
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
	// referencja do colelekcji danej bazy danych z jej nazwą
	const collectionRef = collection(db, "categories");

	const g = query(collectionRef);

	const querySnapshot = await getDocs(g);

	// tworzenie obiektu danych z danych pozyskanych z Firebase
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

export type AdditionalInformation = {
	displayName?: string;
};

export type UserData = {
	createAt: Date;
	displayName: string;
	email: string;
};

// Pobieramy dane z auth service i wrzucamy je do db firestore
export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation = {} as AdditionalInformation): Promise<void | QueryDocumentSnapshot<UserData>> => {
	if (!userAuth) return;
	// trzy parametry: baza danych, Nasza nazwa dokumentu, uniq id - w tym mprzypadku z response firebase
	const userDocRef = doc(db, "user", userAuth.uid);

	// getDoc sprawdza czy mamy dostęp do danych i czy one istnieją
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; // destrukturyzacja danych z otrzymanej odpowiedzi, jeżeli dane istnieją

		const createAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("bład przy tworzeniou użytkownika:", error);
		}
	}

	// jeżeli użytkownik istnieje
	return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
	onAuthStateChanged(auth, callback);
};


export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((res, rej) => {
		const unsubscrie = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscrie();
				res(userAuth);
			},
			rej
		);
	});
};