<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# BrainOptimize™ Landing Page - Maintenance Guide

This guide provides detailed instructions for maintaining and customizing the BrainOptimize™ landing page. Whether you're new to web development or need a quick reference, follow these step-by-step instructions.

## Table of Contents
1. [Updating Text and Tailwind CSS Classes](#updating-text-and-tailwind-css-classes)
2. [Fixing Broken Links](#fixing-broken-links)
3. [Linking Privacy and Terms Pages](#linking-privacy-and-terms-pages)
4. [Troubleshooting](#troubleshooting)

## Updating Text and Tailwind CSS Classes

### Header Section
```html
<div class="text-xl font-bold text-blue-600">BrainOptimize™</div>
```
To update the brand name:
1. Locate this div in the header section
2. Replace "BrainOptimize™" with your desired text
3. Adjust text size by changing `text-xl` to `text-lg` (smaller) or `text-2xl` (larger)

### Hero Section
The main headline is located here:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
    Edison's 7-Second Brain Trick Activates Your <span class="text-blue-600">Superbrain</span>
</h1>
```
To modify:
- Change headline text between the `<h1>` tags
- Adjust text size using the responsive classes:
  - `text-4xl`: Mobile size
  - `md:text-5xl`: Tablet size
  - `lg:text-6xl`: Desktop size

### Feature Cards
Each feature card follows this structure:
```html
<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 class="text-xl font-semibold mb-4">NASA-Backed Research</h3>
    <p class="text-gray-600">Validated by leading neuroscientists...</p>
</div>
```
To customize:
1. Find the feature cards section
2. Update text within `<h3>` for titles
3. Update text within `<p>` for descriptions
4. Modify styling:
   - Change padding: `p-8` to `p-6` or `p-10`
   - Adjust shadow: `shadow-lg` to `shadow-md` or `shadow-xl`

## Fixing Broken Links

### Navigation Menu Links
Current navigation structure:
```html
<div class="hidden md:flex space-x-8">
    <a href="#features" class="text-gray-600 hover:text-blue-600">Features</a>
    <a href="#benefits" class="text-gray-600 hover:text-blue-600">Benefits</a>
    <a href="#faq" class="text-gray-600 hover:text-blue-600">FAQ</a>
    <a href="#contact" class="text-gray-600 hover:text-blue-600">Contact</a>
</div>
```
To update:
1. Identify the section id you want to link to
2. Update the `href` attribute with the corresponding id
   - Example: `href="#new-section"`
3. Ensure the target section has matching id
   - Example: `<section id="new-section">`

### Call-to-Action Links
Current CTA links:
```html
<a href="https://realgeniuswave.com/DSvsl/?aff=anl210&cam=GP1&pid=vsl" 
   class="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg">
   Discover the Secret Now
</a>
```
To update:
1. Replace the URL in `href` with your new destination
2. Update the button text between the `<a>` tags
3. Maintain the existing classes for consistent styling

## Linking Privacy and Terms Pages

### Footer Legal Links
Current structure:
```html
<div>
    <h4 class="text-lg font-semibold mb-4">Legal</h4>
    <ul class="space-y-2 text-gray-400">
        <li><a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
    </ul>
</div>
```
To add proper links:
1. Create your privacy.html and terms.html files
2. Update the href attributes:
```html
<li><a href="privacy.html" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
<li><a href="terms.html" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
```

## Troubleshooting

### Common Issues and Solutions

1. **Broken Internal Links**
   - Check that section IDs match exactly with href attributes
   - IDs are case-sensitive
   - Example: `href="#FAQ"` won't link to `id="faq"`

2. **Responsive Design Issues**
   - Check responsive classes are properly ordered:
   ```html
   class="text-base md:text-lg lg:text-xl"  <!-- Correct -->
   class="lg:text-xl text-base md:text-lg"  <!-- Incorrect order -->
   ```

3. **Missing Styles**
   - Verify Tailwind CDN is loading:
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```
   - Check browser console for errors

### Best Practices
- Always test changes across different screen sizes
- Maintain consistent spacing using Tailwind's spacing classes
- Keep brand colors consistent using the existing color classes
- Back up files before making significant changes

Remember to validate your HTML using [W3C Validator](https://validator.w3.org/) after making changes.

For additional help, consult the [Tailwind CSS documentation](https://tailwindcss.com/docs) or create an issue in your project repository.
>>>>>>> 0d7eec06e6f2bb9bd4e98a6cc38558fb37f27d26
