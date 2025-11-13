# Frontend Assignment - Ellty

This is a pixel-perfect implementation of a component design from Figma, created as part of a frontend developer test assignment.

## 🎯 Assignment Goal

Replicate a specified component using HTML, CSS, and JavaScript with pixel-perfect accuracy.

## 🚀 Live Demo

[Live Demo Link](#) *(Will be updated after deployment)*

## 📋 Features

- **Pixel-perfect design** matching the Figma prototype
- **Interactive checkboxes** with smooth animations
- **Functional "Done" button** that displays selected pages
- **Responsive layout** that works on different screen sizes
- **Clean, well-organized code** with proper semantic HTML
- **Smooth hover effects** and transitions
- **Keyboard accessibility** support

## 🛠️ Technologies Used

- HTML5
- CSS3 (with Flexbox and custom properties)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries required

## 📦 Project Structure

```
assignment/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # Project documentation
```

## 💻 Local Development

1. Clone the repository:
```bash
git clone [repository-url]
cd assignment
```

2. Open `index.html` in your browser:
```bash
# Using a simple HTTP server (recommended)
python -m http.server 8000
# OR
npx serve
```

3. Navigate to `http://localhost:8000` in your browser

## ✨ Component Features

### Modal Card
- White background with pink border (`#FF1B8D`)
- Rounded corners with subtle shadow
- Responsive width (280px default, scales on mobile)

### Page List
- Four page items with labels
- Custom-styled checkboxes (blue when checked)
- Smooth hover states
- Proper spacing and alignment

### Done Button
- Yellow gradient background (`#FFD54F` to `#FFC107`)
- Hover and active states with visual feedback
- Displays alert with selected pages
- Console logging for debugging

### Interactivity
- Checkboxes toggle on/off
- Done button shows selected pages
- Keyboard navigation support
- Smooth transitions and animations

## 🎨 Design Specifications

- **Primary Color**: `#FF1B8D` (Pink border)
- **Checkbox Active**: `#3B82F6` (Blue)
- **Button Background**: `#FFD54F` - `#FFC107` (Yellow gradient)
- **Font**: System UI fonts (Apple, Segoe UI, Roboto)
- **Border Radius**: 8px (modal), 6px (button), 4px (checkbox)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Author

Created as part of the Ellty frontend developer test assignment.

## 📄 License

This project is created for evaluation purposes.
