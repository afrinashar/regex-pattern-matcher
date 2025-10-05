# Regex Pattern Tester

A comprehensive, interactive web application for testing and learning regular expressions in JavaScript. This tool helps developers master regex patterns with practical examples, live testing, and detailed explanations.

## Features

### 🎯 Interactive Pattern Testing
- Real-time regex pattern testing with visual feedback
- Support for all JavaScript regex flags (g, i, m, s)
- Live highlighting of matches in test strings
- Detailed match information with positions and groups

### 📚 Comprehensive Pattern Library
- **50+ Pre-built Patterns** organized by category:
  - Basic patterns (digits, letters, whitespace)
  - Email and phone validation
  - Date and time formats
  - URL and domain validation
  - Password strength patterns
  - Credit card and financial patterns
  - IP addresses and network patterns
  - File extensions and programming patterns

### 🛠️ JavaScript Method Demonstrations
Interactive examples for all major regex methods:
- `test()` - Check if pattern exists
- `match()` - Extract matches
- `matchAll()` - Get all match details
- `search()` - Find position of match
- `replace()` - Replace matches
- `split()` - Split string by pattern

### ✨ Advanced Features
- **Custom Pattern Creation**: Add and save your own regex patterns
- **Local Storage**: Your custom patterns persist between sessions
- **Copy to Clipboard**: Easy copying of regex patterns
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Error Handling**: Clear error messages for invalid patterns
- **Example Loading**: Quick loading of sample text for testing

## Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start exploring regex patterns!

### Usage

#### Testing Existing Patterns
1. Select a pattern from the dropdown menu
2. Review the pattern details, description, and examples
3. The pattern automatically loads into the tester
4. Modify the test string or try different examples
5. Use the JavaScript method buttons to see different operations

#### Creating Custom Patterns
1. Click the "Custom Pattern" button
2. Enter your pattern details:
   - Pattern name
   - Regular expression
   - Description
   - Test examples
3. Save the pattern to add it to your collection
4. Custom patterns are saved in your browser's local storage

#### Testing Your Own Patterns
1. Enter your regex pattern in the "Regular Expression" field
2. Add flags using the checkboxes (g, i, m, s)
3. Enter test text in the "Test String" area
4. Click "Test Pattern" or let it auto-test as you type
5. Review results, matches, and highlighted text

## Pattern Categories

### Basic Patterns
- Digits, letters, alphanumeric characters
- Whitespace and special character matching

### Validation Patterns
- Email addresses (basic and strict validation)
- Phone numbers (US and international formats)
- Password strength validation

### Date & Time Patterns
- Various date formats (MM/DD/YYYY, ISO dates)
- Time formats (12-hour, 24-hour)

### Web Patterns
- HTTP/HTTPS URLs with validation
- Domain names and subdomains
- HTML tags and comments
- Hex color codes

### Security Patterns
- Strong password requirements
- Medium security passwords
- Input sanitization patterns

### Financial Patterns
- Credit card validation (Visa, MasterCard, etc.)
- Banking and financial number formats

### Network Patterns
- IPv4 and IPv6 addresses
- MAC addresses
- Network port validation

### Programming Patterns
- Variable naming conventions
- Function calls and syntax
- Code structure patterns

## Technical Details

### Built With
- **HTML5** - Semantic structure
- **CSS3** - Modern responsive design with Grid and Flexbox
- **Vanilla JavaScript (ES6+)** - No external dependencies
- **Font Awesome** - Icons and UI elements
- **Google Fonts** - Inter font family

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Debounced input for real-time testing
- Efficient DOM manipulation
- Lightweight codebase with no external dependencies
- Local storage for pattern persistence

## File Structure
```
regex-tester/
├── index.html          # Main application HTML
├── styles.css          # Responsive CSS styling
├── script.js           # JavaScript application logic
├── README.md           # This file
└── .github/
    └── copilot-instructions.md  # AI assistant guidelines
```

## Contributing

Contributions are welcome! Here's how you can help:

1. **Add New Patterns**: Extend the pattern database with new useful regex patterns
2. **Improve UI/UX**: Enhance the user interface and user experience
3. **Add Features**: Implement new functionality like pattern export/import
4. **Bug Fixes**: Report and fix any issues you encounter
5. **Documentation**: Improve documentation and examples

### Development Guidelines
- Follow semantic HTML structure
- Use vanilla JavaScript for maximum compatibility
- Maintain responsive design principles
- Include comprehensive error handling
- Add meaningful comments and documentation

## Examples

### Email Validation
```javascript
// Basic email pattern
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// Test examples
console.log(emailRegex.test("user@example.com")); // true
console.log(emailRegex.test("invalid.email"));    // false
```

### Password Strength
```javascript
// Strong password pattern
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Test examples  
console.log(strongPassword.test("MyPass123!")); // true
console.log(strongPassword.test("password"));   // false
```

### Phone Number Formatting
```javascript
// US phone number pattern
const phoneRegex = /^(\+1[\s-]?)?\(?([0-9]{3})\)?[\s.-]?([0-9]{3})[\s.-]?([0-9]{4})$/;

// Format phone number
function formatPhone(phone) {
    const match = phone.match(phoneRegex);
    if (match) {
        return `(${match[2]}) ${match[3]}-${match[4]}`;
    }
    return null;
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Regex patterns sourced from common web development practices
- UI inspiration from modern web applications
- Built with accessibility and usability in mind
- Thanks to the JavaScript and web development community

---

**Happy Regex Testing!** 🎉

For questions, suggestions, or contributions, please feel free to open an issue or submit a pull request.
