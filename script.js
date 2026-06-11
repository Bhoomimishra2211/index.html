document.getElementById('bizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const newBiz = {
        name: document.getElementById('bizName').value,
        category: document.getElementById('bizCategory').value,
        location: "New Location" 
    };

    // लिस्ट में जोड़ें
    businesses.push(newBiz);
    
    alert(newBiz.name + " सफलतापूर्वक जुड़ गया!");
    displayBusinesses(); // लिस्ट अपडेट करें
});