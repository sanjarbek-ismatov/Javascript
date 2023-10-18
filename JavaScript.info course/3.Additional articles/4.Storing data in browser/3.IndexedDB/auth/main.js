const form = document.forms.namedItem("auth");

const request = indexedDB.open("auth", 1);
request.onsuccess = () => {
  const db = request.result;
  form.onsubmit = (event) => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
      gender: {
        value: gender,
      },
    } = form;
      const transaction = db.transaction("users", "readwrite");
      transaction.onabort = () => {
          alert("Transaction got aborted");
      };
      transaction.onerror = () => {
          alert(transaction.error.message);
      };
      const users = transaction.objectStore("users");
      const addRequest = users.add({ email, password, gender });
    addRequest.onsuccess = () => {
      alert(addRequest.result);
    };
    addRequest.onerror = () => {
      alert(addRequest.error.message);
    };
  };
};
request.onerror = () => {
  alert(request.error.message);
};
request.onupgradeneeded = () => {
  const db = request.result;
  if (!db.objectStoreNames.contains("users")) {
    db.createObjectStore("users", {keyPath: 'email'}).createIndex("gender_idx", "gender");
  }
};
