document.getElementById('signin-form').addEventListener('submit', async(event) => {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message); // Show success message
        } else {
            alert('Error: ' + data.message); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
    }
});