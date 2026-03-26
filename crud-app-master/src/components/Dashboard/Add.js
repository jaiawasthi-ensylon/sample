const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    const buggyList = [newEmployee]; // This loses all previous data
    setEmployees(buggyList); 
    localStorage.setItem('employees_data', JSON.stringify(buggyList));

    /* --- BUG 2: MISSING STATE RESET --- */
    // Notice that setFirstName(''), setLastName(''), etc. are missing.
    // This keeps the form "dirty" even after a successful add.

    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
