document.addEventListener('DOMContentLoaded', () => {
    console.log("tutors.js is loaded");

    const tutors = [
        { name: 'John Doe', subject: 'Mathematics', rating: 4.9, ageRange: '10-15', mode: 'remote', location: 'New York', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Jane Smith', subject: 'Physics', rating: 4.8, ageRange: '15-17', mode: 'in-person', location: 'San Francisco', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Emily Johnson', subject: 'Chemistry', rating: 4.7, ageRange: '17+', mode: 'remote', location: 'Los Angeles', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
        { name: 'Michael Brown', subject: 'Computer Science', rating: 4.6, ageRange: '10-15', mode: 'in-person', location: 'New York', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { name: 'Sarah Wilson', subject: 'Biology', rating: 4.5, ageRange: '15-17', mode: 'remote', location: 'San Francisco', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { name: 'David Lee', subject: 'Mathematics', rating: 4.4, ageRange: '17+', mode: 'in-person', location: 'Los Angeles', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { name: 'Linda Martinez', subject: 'Physics', rating: 4.9, ageRange: '10-15', mode: 'remote', location: 'New York', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { name: 'James Anderson', subject: 'Chemistry', rating: 4.8, ageRange: '15-17', mode: 'in-person', location: 'San Francisco', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { name: 'Jessica Garcia', subject: 'Biology', rating: 4.7, ageRange: '17+', mode: 'remote', location: 'Los Angeles', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
        { name: 'William Robinson', subject: 'Computer Science', rating: 4.6, ageRange: '10-15', mode: 'in-person', location: 'New York', image: 'https://randomuser.me/api/portraits/men/10.jpg' }
    ];

    let currentFilter = tutors; // Initialize with all tutors

    function displayTutors(filteredTutors) {
        const tutorList = document.getElementById('tutor-list');
        tutorList.innerHTML = ''; // Clear previous results

        filteredTutors.forEach(tutor => {
            const li = document.createElement('li');
            li.className = 'tutor';

            li.innerHTML = `
                <img src="${tutor.image}" alt="${tutor.name}">
                <h4>${tutor.name}</h4>
                <p>Subject: ${tutor.subject}</p>
                <p>Rating: ${tutor.rating}</p>
                <p>Age Range: ${tutor.ageRange}</p>
                <p>Mode: ${tutor.mode.charAt(0).toUpperCase() + tutor.mode.slice(1)}</p>
                <p>Location: ${tutor.location}</p>
            `;

            tutorList.appendChild(li);
        });
    }

    function filterByAge() {
        const userAge = parseInt(document.getElementById('user-age').value);
        console.log("User age entered:", userAge); // Check the user's input age

        let ageRange;

        if (userAge >= 10 && userAge <= 15) {
            ageRange = '10-15';
        } else if (userAge >= 15 && userAge <= 17) {
            ageRange = '15-17';
        } else if (userAge > 17) {
            ageRange = '17+';
        } else {
            alert("Please enter a valid age.");
            return;
        }

        currentFilter = tutors.filter(tutor => tutor.ageRange === ageRange);
        console.log("Filtered tutors based on age range:", currentFilter); // Check the filtered tutors

        displayTutors(currentFilter);
    }

    function filterTutors(criteria) {
        console.log("Filter criteria selected:", criteria); // Check which criteria is selected

        const filteredTutors = currentFilter.filter(tutor => {
            return tutor.mode === criteria || tutor.location === criteria;
        });

        console.log("Tutors after applying filter:", filteredTutors); // Check the tutors after applying the filter

        displayTutors(filteredTutors);
    }

    // Set up event listeners for filtering
    document.getElementById('age-filter-btn').addEventListener('click', filterByAge);

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            filterTutors(button.getAttribute('data-criteria'));
        });
    });

    // Display all tutors by default
    displayTutors(tutors);
});
