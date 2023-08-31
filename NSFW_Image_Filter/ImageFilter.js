window.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('upload-input');
    const preview = document.getElementById('preview');
  
    // Function to handle image preview
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target.result;
          preview.innerHTML = `<img src="${imageUrl}" alt="Preview" width="100%">`;
        };
        reader.readAsDataURL(file);
      } else {
        preview.innerHTML = '';
      }
    }
  
    // Add event listener to the upload input
    uploadInput.addEventListener('change', handleImageUpload);
  });

  