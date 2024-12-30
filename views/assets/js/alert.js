document.addEventListener('DOMContentLoaded', () => {
    initializeDeleteButtons();
  });
  
  function initializeDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.btn-danger');
    deleteButtons.forEach(button => {
      button.addEventListener('click', handleDeleteButtonClick);
    });
  }
  
  async function handleDeleteButtonClick(event) {
    event.preventDefault();
    const button = event.target;
    const projectId = button.getAttribute('data-id');
  
    if (!(await confirmDelete())) return;
  
    try {
      const result = await deleteProject(projectId);
      handleDeleteSuccess(button, result.message);
    } catch (error) {
      handleDeleteError(error);
    }
  }
  
  function confirmDelete() {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => result.isConfirmed);
  }
  
  async function deleteProject(projectId) {
    try {
      const response = await fetch('/delete-project', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: projectId })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete the project');
      }
  
      return response.json();
    } catch (error) {
      throw error;
    }
  }
  
  function handleDeleteSuccess(button, message) {
    Swal.fire('Deleted!', message, 'success');
    button.closest('.card').remove(); // Hapus elemen kartu proyek dari DOM
  }
  
  function handleDeleteError(error) {
    console.error('Error:', error);
    Swal.fire('Error!', error.message || 'Something went wrong.', 'error');
  }
  