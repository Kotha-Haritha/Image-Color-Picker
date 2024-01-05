async function saveColor() {
    const color = document.getElementById('colorName').innerHTML;  
    try {
      const response = await fetch('http://localhost:3000/api/colors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hexaCode: color
        }),
      });
      const newColor = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
}