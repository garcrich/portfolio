# My Portfolio

<a href="https://rickyggarcia.com/" target="_blank">Visit Live Site</a>


This repository contains the source code for my personal portfolio website. It showcases my work, education, certifications, and recommendations from colleagues. The site is built using React, TypeScript, SCSS modules, React Testing Library, and several other NPM modules (see `package.json` for the complete list).

The focus of this project is responsive design, clean, modular code, and scalable architecture.

## Table of Contents

- [My Portfolio](#my-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Testing](#testing)
    - [GitHub Actions Workflow](#github-actions-workflow)
      - [Workflow Steps](#workflow-steps)
  - [CloudFormation Templates](#cloudformation-templates)
  - [Contributions](#contributions)

## Project Structure

The project is structured with the following main components:

- `Home`: The main container that holds all the sections.
- `NavBar`: The navigation bar at the top of the page.
- `Hero`: The intro section with a brief introduction.
- `About`: The about me section with a personal summary.
- `Work`: The work experience section displaying professional history.
- `EduAndCerts`: The education and certifications section.
- `Recommendations`: The recommendations section with quotes from colleagues.
- `Projects`: (Currently commented out) The projects section showcasing personal projects.
- `Contact`: The contact section with a form to get in touch.
- `Footer`: The footer section with copyright and social media links.

## Usage

To run the project locally, follow these steps:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and navigate to `http://localhost:3000`.

## Testing

This project uses React Testing Library for testing components. To run the tests, follow these steps:

1. Run `npm test` to execute the test suite.
2. Press `a` to run all tests.

### GitHub Actions Workflow

This project follows a standard GitHub workflow, which includes the use of GitHub Actions for continuous integration and deployment. The workflow is defined in a YAML file located in the `.github/workflows` folder called `deploy.app`.

The workflow is triggered on a push event to the `main` and `development` branches.

#### Workflow Steps

1. **Build the application**: This job builds the application, runs tests, and uploads the build artifacts. It uses the latest Ubuntu image and includes the following steps:

  - Checkout code
  - Set up Node.js
  - Install dependencies
  - Run tests
  - Build
  - Upload artifact

2. **Deploy to Amazon S3**: This job deploys the application to Amazon S3. It requires the `build` job to be completed successfully and includes the following steps:

  - Checkout code
  - Download artifact
  - Configure AWS credentials
  - Deploy the CloudFormation stack and S3 bucket
  - Sync the build directory to the S3 bucket
  - Invalidate CloudFront cache (only for the `main` branch)

After deployment, the website is accessible through the assigned URL for the production environment.
## CloudFormation Templates

This project uses AWS CloudFormation to automate the provisioning and deployment of the necessary AWS resources. Two separate CloudFormation templates are included: one for the development environment and one for the production environment. These templates are located in the `.cloudformation` directory:

- `dev_stack.yml`: This template creates an S3 bucket for the development environment with server-side encryption enabled.
- `prod_stack.yml`: This template creates an S3 bucket for the production environment with public read access and website hosting configuration. It also creates an S3 bucket policy to allow public access to the bucket's objects.

## Contributions

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements. Your contributions are always welcome! 🙂