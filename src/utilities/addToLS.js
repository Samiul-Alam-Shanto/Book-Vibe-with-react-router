const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("bookList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoreLS = (id) => {
  const storedData = getStoredBook();
  if (storedData.includes(id)) {
    alert("already exists");
  } else {
    storedData.push(id);
    const newStoredData = JSON.stringify(storedData);
    localStorage.setItem("bookList", newStoredData);
  }
};

const getWishBook = () => {
  const wishBookSTR = localStorage.getItem("wishList");

  if (wishBookSTR) {
    const wishBookData = JSON.parse(wishBookSTR);
    return wishBookData;
  } else {
    return [];
  }
};

const addToWishLS = (id) => {
  const storedData = getWishBook();
  if (storedData.includes(id)) {
    alert("already exists");
  } else {
    storedData.push(id);
    const newStoredData = JSON.stringify(storedData);
    localStorage.setItem("wishList", newStoredData);
  }
};
export { addToStoreLS, getStoredBook, getWishBook, addToWishLS };
