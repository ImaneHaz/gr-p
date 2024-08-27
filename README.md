# Simple Graphing Calculator & Tutor Recommendations

This project includes a simple graphing calculator and a tutor recommendation system based on user age and preferences.

## Features
- **Graphing Calculator**: Plot mathematical equations.
- **Tutor Recommendations**: Find tutors based on age, mode (remote/in-person), and location.

## How to Run
1. Clone the repository: `git clone https://github.com/yourusername/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Open `index.html` in your browser to use the graphing calculator.
4. Open `tutors.html` to see tutor recommendations.

## Requirements
If you're using Python:
- `flask`
- `requests`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

FINAL REPORT 

1. Introduction

The Graph Project aims to build a robust, scalable, and efficient system for recommending tutors based on various filters and preferences. This report details the project's development, from initial planning and requirements gathering to the final implementation and deployment. The project leverages modern development practices such as Git for version control, CI/CD pipelines for automated testing and deployment, and Domain-Driven Design (DDD) principles for a clean and maintainable codebase.

2. Project Overview

2.1 Objectives
Develop a recommendation system for tutors.
Implement a scalable API for retrieving tutor recommendations.
Ensure code quality and maintainability through testing and automated CI/CD pipelines.
Adhere to industry-standard development and versioning practices.
2.2 Scope
The project includes:

A backend system developed in Node.js.
A test suite to ensure the functionality of the tutor recommendation system.
A CI/CD pipeline to automate testing, building, and deployment processes.
Documentation and licensing to facilitate future development and use.
3. Project Structure

The project is organized according to Node.js best practices:

3.1 Directory Structure
src/: Contains the main codebase, including modules for tutor recommendation.
tests/: Contains all test cases, ensuring that the code is properly validated.
.github/workflows/: Contains CI/CD pipeline configuration files.
package.json: Defines the project's dependencies and scripts.
LICENSE: Specifies the project's licensing terms.
README.md: Provides an overview of the project, setup instructions, and usage guidelines.
3.2 Dependencies
Development Dependencies: Defined in package.json to ensure a consistent development environment.
Project Dependencies: Managed via npm, ensuring that all necessary libraries are included and up-to-date.
4. Version Control

4.1 Git and GitHub Usage
The project adopts Git for version control and GitHub as the remote repository. Key practices include:

Branching Strategy: Follows the GitFlow branching model with branches like develop, feature/*, and release/*.
Commit Convention: Follows the Conventional Commits convention for clear and meaningful commit messages (e.g., feat: add filtering for tutor recommendations).
4.2 Versioning
Semantic Versioning (SemVer): The project versions its releases following SemVer, ensuring that the version numbers communicate the nature of changes.
5. CI/CD Pipeline

The project employs GitHub Actions for CI/CD:

Automated Testing: The pipeline automatically runs tests on every push or pull request, ensuring that no broken code is merged into main.
Automated Deployment: Upon successful tests, the code is built and prepared for deployment.
6. Domain-Driven Design (DDD) and Architecture

6.1 Domain Modeling
The project uses DDD principles to define:

Entities: Tutors, Users, and Sessions, representing core business objects.
Value Objects: Filters and Preferences, encapsulating user inputs for recommendations.
Services: TutorRecommendationService, handling the business logic for generating recommendations.
6.2 Hexagonal Architecture
The project follows the hexagonal architecture, ensuring a clear separation between business logic and infrastructure concerns. This approach improves maintainability and testability.

7. Testing and Quality Assurance

7.1 Test Coverage
Test Suite: Includes unit tests for all key functionalities, ensuring over 70% test coverage.
Test Coverage Report: Automatically generated during CI to validate that coverage goals are met.
7.2 Acceptance Testing
Acceptance tests are defined for each requirement, and the results are documented to demonstrate that the system meets all specified requirements.

8. Licensing

The project is licensed under the MIT License. This choice was motivated by the desire to allow maximum freedom for future developers while maintaining attribution.

9. Deployment and Build

9.1 Deployment
The code is deployed to a Node.js environment with npm as the package manager. The deployment process is automated via the CI/CD pipeline, ensuring that the latest tested code is always live.

9.2 Build Automation
Build scripts are defined in package.json, enabling easy setup and deployment of the development environment
