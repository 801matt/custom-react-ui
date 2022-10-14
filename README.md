# Ware Front-End Mini-Project: Cycle Count (Location Scan Orders)
Hello and welcome to Ware's starter pack for the Cycle Count mini-project. The purpose
of this project is to provide an alternative format for evaluating candidates outside of the
"traditional" technical interview with live coding exercises. We hope that this project
enables you to put your experience and talent on display in a way that a live interview cannot.

## Evaluation Criteria
This project is intended to supply Ware with data about how you write and manage code, as well
as how you use tools common to our development workflow. The criteria Ware will use to evaluate
your project submission includes:

- Faithfulness to the original design. Turning wireframes and mockups into components that a user can interact with in a browser is an essential part of the role you're applying for.
- Code cleanliness and organization. Writing code that is easy to understand and easy for others to develop upon is a very valuable skill for the functioning of the product and the sanity of fellow developers :) Comments where appropriate and documentation are always good ideas.
- Tooling proficiency. Using version control in a sensible manner and managing project dependencies are critical parts of any software development role.

## Project Details
The goal of this project is to create one (or more) React components to implement a functional version of the mockup for
a page of location scan orders. A location scan order is a collection of bin names within a warehouse that a customer
wishes for Ware to scan. The page you will be implementing supplies the customer with information about the state of
location scan orders they have issued.

### Running the Project
We used `create-react-app` to avoid you (and us) having to do a lot of project configuration and write boilerplate code.

Install the required packages:
```bash
$ npm install
```

Run the project:
```bash
$ npm run start
```

If your project can run successfully via the command above, then 👍, there's no need to configure this project to run in a different environment.

### The Data
The `src/data.json` file represents an object that may come back as the response from a call to Ware's API.
The following are brief descriptions of properties present in that object that will be the most relevant to this project:

- `getLocationScanOrders.orders[].createdAt`: A timestamp of when the order was issued.
- `getLocationScanOrders.orders[].startTime`: A timestamp of when Ware began to fulfill the order.
- `getLocationScanOrders.orders[].endTime`: A timestamp of when Ware considered the order to be in a terminal state.
- `getLocationScanOrders.orders[].status`: The status of the order. One of `'QUEUED'`, `'IN_PROGRESS'`, `'SUCCESS'`, or `'FAILURE'`.
- `getLocationScanOrders.orders[].bins[]`: Objects representing individual bins for the order.
- `getLocationScanOrders.orders[].bins[].status`: The status of the order for individual bins within the order. One of `'QUEUED'`, `'IN_PROGRESS'`, `'SUCCESS'`, or `'FAILURE'`.
- `getLocationScanOrders.orders[].bins[].error`: An object representing an error Ware encountered attempting to fulfill the order for the bin. `null` indicates no error.

### The Mockup
The design for the page for this project can be found at the link sent to you from your contact at Ware.
If (when) you have questions, please reach out to your Ware contact.

### Project Submission
In order to submit your work for this project, first fork [this repo](https://github.com/warerobotics/interviews), create a new branch on the forked repo
with the branch name formatted like `your-name`. Make your commits on that branch of the forked repo, then open a pull request to merge back into Ware's repo.

### Timeboxing
Our intent is not to make you spend an inordinate amount of time on this project. Please limit yourself to what is reasonable for your schedule. If you find
that you're not able to
