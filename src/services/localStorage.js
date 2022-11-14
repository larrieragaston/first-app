import lscache from "lscache";

// enable warnings
if (process.env.NODE_ENV !== "production") {
	lscache.enableWarnings(true);
}

const tokenKey = "__FirstApp__";
const duration = 86400000; // 24hs in milliseconds
const localStorage = {};

// Set token
localStorage.set = (user) => lscache.set(tokenKey, user, duration);

// Get token
localStorage.get = () => lscache.get(tokenKey);

// Delete token
localStorage.delete = () => lscache.flush();

// Get user
localStorage.getUser = () => lscache.get(tokenKey)?.user;

// Update user
localStorage.updateUser = (updatedUser) => {
	const storageData = lscache.get(tokenKey);
	storageData.user = updatedUser;
	localStorage.set(storageData);
};

export default localStorage;
