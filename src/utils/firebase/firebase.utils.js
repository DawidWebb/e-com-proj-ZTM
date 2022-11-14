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
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

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

// dodawanie kolekcji i dokumentów do Firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);

	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

//pobranie danych z Firestore
export const getCategoriesAndDocuments = async () => {
	// referencja do colelekcji danej bazy danych z jej nazwą
	const collectionRef = collection(db, "categories");

	const g = query(collectionRef);

	const querySnapshot = await getDocs(g);

	// tworzenie obiektu danych z danych pozyskanych z Firebase
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// Pobieramy dane z auth service i wrzucamy je do db firestore
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
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
	return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
	return new Promise((res, rej) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				res(userAuth);
			},
			rej,
		);
	});
};
