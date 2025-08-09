/**
 * timetable.js - Dynamic Course Timetable Generator
 * 
 * This script dynamically generates a course timetable table to replace static HTML.
 * 
 * Features:
 * - Centralized course data storage in a structured format
 * - Automatic calculation of total course hours
 * - Dynamic generation of complex table structures with rowspans
 * - Responsive to data changes (easy to add/remove courses)
 */

/**
 * Creates and populates the course timetable
 * 
 * This function:
 * 1. Gets the container element where the table will be inserted
 * 2. Defines course data organized by term
 * 3. Calculates total course hours
 * 4. Generates the complete table HTML structure
 * 5. Inserts the table into the container
 */
function createTimetable() {
    const container = document.getElementById('making-a-table');
    
        /**
     * Course data organized by term
     * 
     * Structure:
     * {
     *   termName: [
     *     { code: 'CourseCode', name: 'Course Name', hours: creditHours },
     *     ...
     *   ]
     * }
     * 
     * This structure allows easy addition of new terms or courses
     */
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

    /**
     * Calculate total course hours
     * 
     * Steps:
     * 1. Combine all courses from all terms into a single array
     * 2. Use reduce() to sum up the hours property of each course
     */
    const totalHours = [...courseData.winter, ...courseData.spring].reduce((sum, course) => sum + course.hours, 0);

    /**
     * Generate the HTML for the table
     * 
     * The table structure includes:
     * - Caption
     * - Table header with rowspan and colspan
     * - Table body with term grouping and rowspans
     * - Table footer with total hours
     */
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

    /**
     * Process Winter term courses
     * 
     * The first course in each term gets:
     * - A header cell with rowspan set to the number of courses in the term
     * - Regular data cells for course details
     * 
     * Subsequent courses only get the data cells
     */
    courseData.winter.forEach((course, index) => {
        if (index === 0) {
            // First course in Winter term - includes term header
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

    /**
     * Process Spring term courses
     * 
     * Same pattern as Winter term:
     * - First course includes term header with rowspan
     * - Subsequent courses only have course details
     */
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