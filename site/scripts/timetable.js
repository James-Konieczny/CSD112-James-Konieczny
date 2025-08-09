function createTimetable() {
    const container = document.getElementById('making-a-table');
    
    // Course data organized by term
    const courseData = {
        winter: [
            { code: 'CSD113', name: 'Computing Environment and Tools', hours: 4 },
            { code: 'TNY130', name: 'Technology in Society', hours: 2 },
            { code: 'MTH123', name: 'Computer Math', hours: 3 },
            { code: 'CSD122', name: 'Hardware/OS/Networks', hours: 5 },
            { code: 'CSD110', name: 'Introduction to Programming', hours: 4 },
            { code: 'CMM115', name: 'Communications 1', hours: 2 }
        ],
        spring: [
            { code: 'CSD121', name: 'Programming Concepts 1', hours: 4 },
            { code: 'CSD112', name: 'Introduction to Website Development', hours: 4 },
            { code: 'CSD123', name: 'Databases 1', hours: 4 },
            { code: 'CSA103', name: 'System Analysis and Design', hours: 3 },
            { code: 'CSD124', name: 'Business Applications 1', hours: 4 },
            { code: 'CSD125', name: 'Emerging Technology', hours: 3 }
        ]
    };

    // Calculate total hours
    const totalHours = [...courseData.winter, ...courseData.spring].reduce((sum, course) => sum + course.hours, 0);


    let html = `
        <table>
            <caption>Table 1. Current Courses</caption>
            <thead>
                <tr>
                    <th scope="col" rowspan="2">Term</th>
                    <th scope="col" colspan="3">Course</th>
                </tr>
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Hrs/Week</th>
                </tr>
            </thead>
            <tbody>`;

    courseData.winter.forEach((course, index) => {
        if (index === 0) {
            html += `
                <tr>
                    <th scope="row" rowspan="${courseData.winter.length}">Winter</th>
                    <td>${course.code}</td>
                    <td>${course.name}</td>
                    <td>${course.hours}</td>
                </tr>`;
        } else {
            html += `
                <tr>
                    <td>${course.code}</td>
                    <td>${course.name}</td>
                    <td>${course.hours}</td>
                </tr>`;
        }
    });

    courseData.spring.forEach((course, index) => {
        if (index === 0) {
            html += `
                <tr>
                    <th scope="row" rowspan="${courseData.spring.length}">Spring</th>
                    <td>${course.code}</td>
                    <td>${course.name}</td>
                    <td>${course.hours}</td>
                </tr>`;
        } else {
            html += `
                <tr>
                    <td>${course.code}</td>
                    <td>${course.name}</td>
                    <td>${course.hours}</td>
                </tr>`;
        }
    });

    html += `
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row" colspan="3">Total</th>
                    <td>${totalHours}</td>
                </tr>
            </tfoot>
        </table>`;

    container.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', createTimetable);