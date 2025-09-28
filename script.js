document.addEventListener("DOMContentLoaded", () => {
  const editBtn     = document.getElementById("editBtn");
  const editModal   = document.getElementById("editModal");
  const editForm    = document.getElementById("editForm");
  const cancelEdit  = document.getElementById("cancelEdit");

  const profileName  = document.getElementById("profileName");
  const profileTag   = document.getElementById("profileTagline");
  const profileAbout = document.getElementById("profileAbout");
  const profileImg   = document.getElementById("profileImg");

  // Open modal with current values
  editBtn.addEventListener("click", () => {
    document.getElementById("editName").value    = profileName.textContent;
    document.getElementById("editTagline").value = profileTag.textContent;
    document.getElementById("editAbout").value   = profileAbout.textContent;
    editModal.classList.remove("hidden");
  });

  // Close modal
  cancelEdit.addEventListener("click", () => editModal.classList.add("hidden"));

  // Save edits
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent  = document.getElementById("editName").value;
    profileTag.textContent   = document.getElementById("editTagline").value;
    profileAbout.textContent = document.getElementById("editAbout").value;

    const file = document.getElementById("editImage").files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => { profileImg.src = reader.result; };
      reader.readAsDataURL(file);
    }

    editModal.classList.add("hidden");
  });
});
