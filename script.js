// Regex Pattern Database
const regexPatterns = {
    // Basic Patterns
    'digits': {
        title: 'Digits Only',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '\\d+',
        description: 'Matches one or more consecutive digits (0-9). Useful for extracting numbers from text.',
        examples: ['123', '42', '007', 'Age: 25', 'Price: $19.99', 'abc123def']
    },
    'single-digit': {
        title: 'Single Digit',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '\\d',
        description: 'Matches exactly one digit (0-9).',
        examples: ['5', '1a2b3c', 'no digits here', 'a1', '123']
    },
    'word-characters': {
        title: 'Word Characters',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '\\w+',
        description: 'Matches word characters (letters, digits, underscores).',
        examples: ['hello_world', 'test123', 'user_name_1', 'special@chars', 'simple']
    },
    'non-word-chars': {
        title: 'Non-Word Characters',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '\\W+',
        description: 'Matches non-word characters (anything except letters, digits, underscores).',
        examples: ['hello@world', 'test!@#', 'user name', 'simple', '123_abc']
    },
    'letters': {
        title: 'Letters Only',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '[a-zA-Z]+',
        description: 'Matches one or more consecutive letters (both uppercase and lowercase).',
        examples: ['Hello', 'WORLD', 'JavaScript', 'test123', 'Hello World', 'a1b2c3']
    },
    'alphanumeric': {
        title: 'Alphanumeric Characters',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '[a-zA-Z0-9]+',
        description: 'Matches one or more alphanumeric characters (letters and digits).',
        examples: ['Hello123', 'test', '123', 'user_name', 'Hello-World', 'test@email.com']
    },
    'whitespace': {
        title: 'Whitespace Characters',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '\\s+',
        description: 'Matches one or more whitespace characters (spaces, tabs, newlines).',
        examples: ['Hello World', 'test\t\ttab', 'line1\nline2', 'multiple   spaces', 'no-spaces', 'a b c']
    },

    // Email Patterns
    'email-basic': {
        title: 'Basic Email Validation',
        category: 'Validation',
        difficulty: 'Medium',
        regex: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
        description: 'Basic email validation pattern. Matches most common email formats.',
        examples: ['user@example.com', 'test.email+tag@domain.co.uk', 'invalid.email', 'user@@domain.com', 'plainaddress', 'user@.com']
    },
    'email-strict': {
        title: 'Strict Email Validation',
        category: 'Validation',
        difficulty: 'Hard',
        regex: '^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\\.[a-zA-Z]{2,}$',
        description: 'More strict email validation with proper start/end anchors and character restrictions.',
        examples: ['user@example.com', 'test123@domain.org', 'john.doe@company.co.uk', '.user@domain.com', 'user@', 'user@domain.']
    },

    // Phone Patterns
    'phone-us': {
        title: 'US Phone Number',
        category: 'Validation',
        difficulty: 'Medium',
        regex: '^(\\+1[\\s-]?)?\\(?([0-9]{3})\\)?[\\s.-]?([0-9]{3})[\\s.-]?([0-9]{4})$',
        description: 'Matches US phone numbers in various formats including area codes.',
        examples: ['(123) 456-7890', '123-456-7890', '123.456.7890', '1234567890', '+1 123 456 7890', '123-45-6789']
    },
    'phone-international': {
        title: 'International Phone',
        category: 'Validation',
        difficulty: 'Medium',
        regex: '^\\+?[1-9]\\d{1,14}$',
        description: 'Basic international phone number format following E.164 standard.',
        examples: ['+1234567890', '+44 20 1234 5678', '+33123456789', '1234567890', '+123', '++123456']
    },

    // Date Patterns
    'date-mmddyyyy': {
        title: 'Date (MM/DD/YYYY)',
        category: 'Date & Time',
        difficulty: 'Medium',
        regex: '^(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/(19|20)\\d{2}$',
        description: 'Matches dates in MM/DD/YYYY format with basic validation.',
        examples: ['12/25/2023', '01/01/2000', '06/15/1990', '13/45/2023', '12/32/2023', '2023/12/25']
    },
    'date-iso': {
        title: 'ISO Date (YYYY-MM-DD)',
        category: 'Date & Time',
        difficulty: 'Medium',
        regex: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$',
        description: 'Matches ISO 8601 date format (YYYY-MM-DD).',
        examples: ['2023-12-25', '2000-01-01', '1990-06-15', '2023-13-45', '2023-12-32', '25/12/2023']
    },
    'time-24h': {
        title: '24-Hour Time (HH:MM)',
        category: 'Date & Time',
        difficulty: 'Medium',
        regex: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
        description: 'Matches 24-hour time format (HH:MM).',
        examples: ['14:30', '09:15', '23:59', '00:00', '25:30', '14:75']
    },

    // URL Patterns
    'url-http': {
        title: 'HTTP/HTTPS URL',
        category: 'Web',
        difficulty: 'Hard',
        regex: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$',
        description: 'Matches HTTP and HTTPS URLs with optional www prefix.',
        examples: ['https://example.com', 'http://www.google.com', 'https://sub.domain.co.uk/path?param=value', 'ftp://example.com', 'https://invalid..com', 'not-a-url']
    },
    'domain': {
        title: 'Domain Name',
        category: 'Web',
        difficulty: 'Medium',
        regex: '^[a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.[a-zA-Z]{2,}$',
        description: 'Matches domain names with proper format validation.',
        examples: ['example.com', 'sub.domain.org', 'test-site.co.uk', '.invalid.com', 'domain.', 'localhost']
    },

    // Password Patterns
    'password-strong': {
        title: 'Strong Password',
        category: 'Security',
        difficulty: 'Hard',
        regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
        description: 'Strong password requiring lowercase, uppercase, digit, special character, and minimum 8 characters.',
        examples: ['MyPass123!', 'SecureP@ssw0rd', 'Test@123', 'password', 'PASSWORD123', 'Pass@1']
    },
    'password-medium': {
        title: 'Medium Password',
        category: 'Security',
        difficulty: 'Medium',
        regex: '^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{6,}$',
        description: 'Medium strength password requiring at least one letter, one digit, and minimum 6 characters.',
        examples: ['Pass123', 'test456', 'MyPassword1', 'password', '123456', 'Pass@']
    },

    // HTML Patterns
    'html-tag': {
        title: 'HTML Tag',
        category: 'Web',
        difficulty: 'Medium',
        regex: '<\\/?[a-zA-Z][a-zA-Z0-9]*\\b[^>]*>',
        description: 'Matches HTML opening and closing tags.',
        examples: ['<div>', '</div>', '<p class="text">', '<img src="image.jpg" alt="test">', '<invalid tag>', 'not a tag']
    },
    'html-comments': {
        title: 'HTML Comments',
        category: 'Web',
        difficulty: 'Easy',
        regex: '<!--.*?-->',
        description: 'Matches HTML comments.',
        examples: ['<!-- This is a comment -->', '<!-- Multi\nline\ncomment -->', '<!DOCTYPE html>', '<-- Not a comment -->', '<!-- Incomplete comment']
    },

    // Credit Card Patterns
    'creditcard-visa': {
        title: 'Visa Credit Card',
        category: 'Financial',
        difficulty: 'Medium',
        regex: '^4[0-9]{12}(?:[0-9]{3})?$',
        description: 'Matches Visa credit card numbers (16 or 19 digits starting with 4).',
        examples: ['4111111111111111', '4012888888881881', '4222222222222', '5111111111111118', '341111111111111', '411111111111']
    },
    'creditcard-mastercard': {
        title: 'MasterCard',
        category: 'Financial',
        difficulty: 'Medium',
        regex: '^5[1-5][0-9]{14}$',
        description: 'Matches MasterCard credit card numbers (16 digits starting with 5).',
        examples: ['5111111111111118', '5555555555554444', '5105105105105100', '4111111111111111', '6011111111111117', '511111111111']
    },

    // Social Security
    'ssn': {
        title: 'US Social Security Number',
        category: 'Government',
        difficulty: 'Medium',
        regex: '^(?!666|000|9\\d{2})\\d{3}-?(?!00)\\d{2}-?(?!0{4})\\d{4}$',
        description: 'Matches US Social Security Numbers with format validation.',
        examples: ['123-45-6789', '987654321', '123456789', '666-12-3456', '000-12-3456', '123-00-4567']
    },

    // IP Address Patterns
    'ipv4': {
        title: 'IPv4 Address',
        category: 'Network',
        difficulty: 'Hard',
        regex: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
        description: 'Matches valid IPv4 addresses.',
        examples: ['192.168.1.1', '10.0.0.1', '255.255.255.255', '0.0.0.0', '256.1.1.1', '192.168.1', '192.168.1.1.1']
    },
    'ipv6': {
        title: 'IPv6 Address',
        category: 'Network',
        difficulty: 'Hard',
        regex: '^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$',
        description: 'Matches basic IPv6 addresses (simplified pattern).',
        examples: ['2001:0db8:85a3:0000:0000:8a2e:0370:7334', 'fe80:0000:0000:0000:0202:b3ff:fe1e:8329', '::1', '2001:db8::1', 'invalid:ipv6', '192.168.1.1']
    },

    // File Patterns
    'filename-image': {
        title: 'Image File Names',
        category: 'Files',
        difficulty: 'Easy',
        regex: '\\.(jpg|jpeg|png|gif|bmp|svg)$',
        description: 'Matches common image file extensions.',
        examples: ['photo.jpg', 'image.png', 'logo.svg', 'picture.gif', 'document.pdf', 'file.txt']
    },
    'filename-document': {
        title: 'Document File Names',
        category: 'Files',
        difficulty: 'Easy',
        regex: '\\.(pdf|doc|docx|txt|rtf|odt)$',
        description: 'Matches common document file extensions.',
        examples: ['document.pdf', 'report.docx', 'readme.txt', 'letter.rtf', 'image.jpg', 'video.mp4']
    },

    // Hex Color Patterns
    'hex-color': {
        title: 'Hex Color Code',
        category: 'Web',
        difficulty: 'Easy',
        regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
        description: 'Matches hexadecimal color codes in 3 or 6 digit format.',
        examples: ['#FF0000', '#00ff00', '#123', '#abc', '#FFFFFF', '#GG0000', 'FF0000', '#12345']
    },

    // UUID Pattern
    'uuid': {
        title: 'UUID (Universally Unique Identifier)',
        category: 'Identifiers',
        difficulty: 'Medium',
        regex: '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$',
        description: 'Matches UUID version 1-5 format.',
        examples: ['123e4567-e89b-12d3-a456-426614174000', '550e8400-e29b-41d4-a716-446655440000', 'invalid-uuid-format', '123e4567-e89b-12d3-a456', '123e4567-e89b-12d3-a456-426614174000-extra']
    },

    // Advanced Character Classes
    'uppercase-letters': {
        title: 'Uppercase Letters',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '[A-Z]+',
        description: 'Matches one or more uppercase letters.',
        examples: ['HELLO', 'JavaScript', 'TEST123', 'lowercase', 'MiXeD CaSe']
    },
    'lowercase-letters': {
        title: 'Lowercase Letters',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '[a-z]+',
        description: 'Matches one or more lowercase letters.',
        examples: ['hello', 'WORLD', 'javascript', 'test', 'CamelCase']
    },
    'vowels': {
        title: 'Vowels (Case Insensitive)',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '[aeiouAEIOU]+',
        description: 'Matches one or more vowels in any case.',
        examples: ['aeiou', 'HELLO', 'xyz', 'Beautiful', 'rhythm']
    },
    'consonants': {
        title: 'Consonants',
        category: 'Basic',
        difficulty: 'Easy',
        regex: '[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]+',
        description: 'Matches one or more consonants.',
        examples: ['bcdfg', 'HELLO', 'aeiou', 'rhythm', 'Beautiful']
    },

    // Quantifier Patterns
    'optional-char': {
        title: 'Optional Character (?)',
        category: 'Quantifiers',
        difficulty: 'Medium',
        regex: 'colou?r',
        description: 'Matches "color" or "colour" - the "u" is optional.',
        examples: ['color', 'colour', 'colouur', 'colr', 'colored', 'coloured']
    },
    'zero-or-more': {
        title: 'Zero or More (*)',
        category: 'Quantifiers',
        difficulty: 'Medium',
        regex: 'ab*c',
        description: 'Matches "a" followed by zero or more "b"s, then "c".',
        examples: ['ac', 'abc', 'abbc', 'abbbbbc', 'axc', 'abcd']
    },
    'one-or-more': {
        title: 'One or More (+)',
        category: 'Quantifiers',
        difficulty: 'Medium',
        regex: 'ab+c',
        description: 'Matches "a" followed by one or more "b"s, then "c".',
        examples: ['abc', 'abbc', 'abbbbbc', 'ac', 'axc']
    },
    'exact-count': {
        title: 'Exact Count {n}',
        category: 'Quantifiers',
        difficulty: 'Medium',
        regex: '\\d{3}',
        description: 'Matches exactly 3 consecutive digits.',
        examples: ['123', '456789', '12', '1234', 'abc123def']
    },
    'range-count': {
        title: 'Range Count {n,m}',
        category: 'Quantifiers',
        difficulty: 'Medium',
        regex: '\\d{2,4}',
        description: 'Matches between 2 and 4 consecutive digits.',
        examples: ['12', '123', '1234', '12345', '1', 'abc123def']
    },
    'minimum-count': {
        title: 'Minimum Count {n,}',
        category: 'Quantifiers',
        difficulty: 'Medium',
        regex: '\\d{3,}',
        description: 'Matches 3 or more consecutive digits.',
        examples: ['123', '1234', '12345', '12', '1', 'test12345test']
    },

    // Anchor Patterns
    'start-of-line': {
        title: 'Start of Line (^)',
        category: 'Anchors',
        difficulty: 'Medium',
        regex: '^Hello',
        description: 'Matches "Hello" only at the beginning of a string or line.',
        examples: ['Hello World', 'Hello there', 'Say Hello', 'Hi Hello']
    },
    'end-of-line': {
        title: 'End of Line ($)',
        category: 'Anchors',
        difficulty: 'Medium',
        regex: 'World$',
        description: 'Matches "World" only at the end of a string or line.',
        examples: ['Hello World', 'World Hello', 'New World', 'World Peace']
    },
    'word-boundary': {
        title: 'Word Boundary (\\b)',
        category: 'Anchors',
        difficulty: 'Hard',
        regex: '\\bcat\\b',
        description: 'Matches "cat" as a complete word, not as part of another word.',
        examples: ['cat', 'the cat sat', 'category', 'concatenate', 'cat-like']
    },
    'non-word-boundary': {
        title: 'Non-Word Boundary (\\B)',
        category: 'Anchors',
        difficulty: 'Hard',
        regex: '\\Bcat\\B',
        description: 'Matches "cat" only when it\'s NOT at word boundaries.',
        examples: ['concatenate', 'category', 'cat', 'the cat', 'cat-like']
    },

    // Lookahead and Lookbehind
    'positive-lookahead': {
        title: 'Positive Lookahead (?=)',
        category: 'Lookarounds',
        difficulty: 'Hard',
        regex: '\\w+(?=@)',
        description: 'Matches word characters followed by "@" but doesn\'t include the "@".',
        examples: ['user@example.com', 'admin@test.org', 'hello@world', 'notanemail', 'test@']
    },
    'negative-lookahead': {
        title: 'Negative Lookahead (?!)',
        category: 'Lookarounds',
        difficulty: 'Hard',
        regex: '\\d+(?!px)',
        description: 'Matches numbers NOT followed by "px".',
        examples: ['10px 20em 30pt', '100vh 50%', '15px', '25rem']
    },
    'positive-lookbehind': {
        title: 'Positive Lookbehind (?<=)',
        category: 'Lookarounds',
        difficulty: 'Hard',
        regex: '(?<=\\$)\\d+',
        description: 'Matches numbers preceded by "$" but doesn\'t include the "$".',
        examples: ['$100', '€200', '$50.99', '100', 'Price: $25']
    },
    'negative-lookbehind': {
        title: 'Negative Lookbehind (?<!)',
        category: 'Lookarounds',
        difficulty: 'Hard',
        regex: '(?<!\\$)\\d+',
        description: 'Matches numbers NOT preceded by "$".',
        examples: ['$100', '€200', '50 items', '25%', 'Price: $25']
    },

    // Groups and Capturing
    'capturing-group': {
        title: 'Capturing Group ()',
        category: 'Groups',
        difficulty: 'Medium',
        regex: '(\\d{4})-(\\d{2})-(\\d{2})',
        description: 'Captures year, month, and day separately from date format.',
        examples: ['2023-12-25', '1990-06-15', '2024-01-01', '23-12-25', 'not-a-date']
    },
    'non-capturing-group': {
        title: 'Non-Capturing Group (?:)',
        category: 'Groups',
        difficulty: 'Medium',
        regex: '(?:Mr|Mrs|Ms)\\. (\\w+)',
        description: 'Groups titles but only captures the name.',
        examples: ['Mr. Smith', 'Mrs. Johnson', 'Ms. Davis', 'Dr. Brown', 'John Doe']
    },
    'named-group': {
        title: 'Named Capturing Group (?<name>)',
        category: 'Groups',
        difficulty: 'Hard',
        regex: '(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})',
        description: 'Captures date parts with named groups.',
        examples: ['2023-12-25', '1990-06-15', '2024-01-01', '23-12-25', 'not-a-date']
    },

    // Advanced Validation Patterns
    'username': {
        title: 'Username Validation',
        category: 'Validation',
        difficulty: 'Medium',
        regex: '^[a-zA-Z0-9_]{3,16}$',
        description: 'Valid username: 3-16 characters, letters, numbers, underscores only.',
        examples: ['user123', 'john_doe', 'admin', 'ab', 'user@name', 'very_long_username_here']
    },
    'slug': {
        title: 'URL Slug',
        category: 'Web',
        difficulty: 'Medium',
        regex: '^[a-z0-9]+(?:-[a-z0-9]+)*$',
        description: 'URL-friendly slug: lowercase letters, numbers, hyphens.',
        examples: ['my-blog-post', 'hello-world', 'user-profile-123', 'My-Blog-Post', 'invalid_slug', 'slug-']
    },
    'mac-address': {
        title: 'MAC Address',
        category: 'Network',
        difficulty: 'Medium',
        regex: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
        description: 'Matches MAC addresses in standard formats.',
        examples: ['00:1B:44:11:3A:B7', '00-1b-44-11-3a-b7', 'AA:BB:CC:DD:EE:FF', '00:1B:44:11:3A', 'invalid-mac']
    },
    'isbn': {
        title: 'ISBN-10/13',
        category: 'Identifiers',
        difficulty: 'Hard',
        regex: '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$',
        description: 'Matches ISBN-10 and ISBN-13 book codes.',
        examples: ['ISBN 978-0-596-52068-7', '0-596-00492-9', '9780596520687', 'ISBN-13: 978-0-596-52068-7', 'invalid-isbn']
    },

    // Data Formats
    'json-string': {
        title: 'JSON String Value',
        category: 'Data',
        difficulty: 'Hard',
        regex: '"([^"\\\\]|\\\\.)*"',
        description: 'Matches JSON string values with escaped characters.',
        examples: ['"hello world"', '"escaped \\"quotes\\""', '"line\\nbreak"', 'not a string', '"unclosed string']
    },
    'csv-field': {
        title: 'CSV Field',
        category: 'Data',
        difficulty: 'Medium',
        regex: '(?:^|,)("(?:[^"]|"")*"|[^",]*)',
        description: 'Matches CSV fields, handling quoted fields with commas.',
        examples: ['field1,field2', '"quoted field","normal"', 'a,"b,c",d', 'simple', '"quotes""inside"']
    },
    'xml-tag': {
        title: 'XML/HTML Tag with Attributes',
        category: 'Web',
        difficulty: 'Hard',
        regex: '<([a-zA-Z][a-zA-Z0-9]*)(\\s+[a-zA-Z][a-zA-Z0-9]*\\s*=\\s*("[^"]*"|\'[^\']*\'|[^\\s>]+))*\\s*/?\\s*>',
        description: 'Matches XML/HTML tags with optional attributes.',
        examples: ['<div>', '<img src="pic.jpg" alt="test">', '<input type="text" required>', '<invalid tag>', '<div class="test">']
    },

    // Log Patterns
    'log-level': {
        title: 'Log Level',
        category: 'Logs',
        difficulty: 'Easy',
        regex: '\\b(DEBUG|INFO|WARN|ERROR|FATAL)\\b',
        description: 'Matches common log levels.',
        examples: ['INFO: Starting application', 'ERROR: File not found', 'DEBUG mode enabled', 'TRACE level', 'info message']
    },
    'timestamp': {
        title: 'Timestamp (ISO 8601)',
        category: 'Date & Time',
        difficulty: 'Hard',
        regex: '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{3})?(?:Z|[+-]\\d{2}:\\d{2})',
        description: 'Matches ISO 8601 timestamp format.',
        examples: ['2023-12-25T14:30:00Z', '2023-12-25T14:30:00.123+05:30', '2023-12-25T14:30:00-08:00', '2023/12/25 14:30:00', 'invalid timestamp']
    },

    // Advanced Text Patterns
    'sentence': {
        title: 'Complete Sentence',
        category: 'Text',
        difficulty: 'Medium',
        regex: '[A-Z][^.!?]*[.!?]',
        description: 'Matches complete sentences starting with capital letter.',
        examples: ['This is a sentence.', 'Hello world!', 'Are you ready?', 'lowercase start.', 'No ending']
    },
    'quoted-text': {
        title: 'Quoted Text',
        category: 'Text',
        difficulty: 'Medium',
        regex: '"([^"\\\\]|\\\\.)*"|\'([^\'\\\\]|\\\\.)*\'',
        description: 'Matches text within single or double quotes, handling escapes.',
        examples: ['"Hello World"', "'Single quotes'", '"Escaped \\"quotes\\""', 'No quotes', '"Unclosed quote']
    },
    'markdown-link': {
        title: 'Markdown Link',
        category: 'Text',
        difficulty: 'Medium',
        regex: '\\[([^\\]]+)\\]\\(([^)]+)\\)',
        description: 'Matches Markdown-style links [text](url).',
        examples: ['[Google](https://google.com)', '[Local link](./page.html)', '[Text only]', '(URL only)', '[Link](url) and more']
    },

    // Security Patterns
    'sql-injection': {
        title: 'Basic SQL Injection Detection',
        category: 'Security',
        difficulty: 'Hard',
        regex: '(?i)(union|select|insert|update|delete|drop|exec|script)\\s*[\\(\\;]',
        description: 'Detects basic SQL injection patterns (educational purposes).',
        examples: ["'; DROP TABLE users;--", "UNION SELECT * FROM", "normal query", "insert into test", "script alert"]
    },
    'xss-basic': {
        title: 'Basic XSS Detection',
        category: 'Security',
        difficulty: 'Hard',
        regex: '<\\s*script[^>]*>.*?</\\s*script\\s*>|javascript:|on\\w+\\s*=',
        description: 'Detects basic XSS patterns (educational purposes).',
        examples: ['<script>alert("xss")</script>', 'javascript:alert(1)', 'onclick="alert()"', 'normal text', '<div>safe content</div>']
    },

    // Programming Patterns
    'variable-name': {
        title: 'Variable Name (Camel Case)',
        category: 'Programming',
        difficulty: 'Medium',
        regex: '^[a-z][a-zA-Z0-9]*$',
        description: 'Matches valid camelCase variable names starting with lowercase letter.',
        examples: ['myVariable', 'userName', 'test', 'camelCaseVariable', 'MyVariable', '123invalid', 'my-variable']
    },
    'function-call': {
        title: 'JavaScript Function Call',
        category: 'Programming',
        difficulty: 'Medium',
        regex: '[a-zA-Z_$][a-zA-Z0-9_$]*\\s*\\([^)]*\\)',
        description: 'Matches JavaScript function calls with parameters.',
        examples: ['myFunction()', 'test(param1, param2)', 'alert("Hello")', 'console.log(data)', '123invalid()', 'not a function']
    }
};

// DOM Elements
let currentPattern = null;
let customPatterns = JSON.parse(localStorage.getItem('customPatterns')) || {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDropdown();
    setupEventListeners();
    loadExamplePattern();
});

// Initialize dropdown with pattern options
function initializeDropdown() {
    const dropdown = document.getElementById('patternDropdown');
    const allPatterns = { ...regexPatterns, ...customPatterns };
    
    // Group patterns by category
    const categories = {};
    Object.entries(allPatterns).forEach(([key, pattern]) => {
        const category = pattern.category || 'Custom';
        if (!categories[category]) categories[category] = [];
        categories[category].push({ key, ...pattern });
    });

    // Clear dropdown
    dropdown.innerHTML = '<option value="">Choose a regex pattern...</option>';

    // Add patterns grouped by category
    Object.entries(categories).sort().forEach(([category, patterns]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        
        patterns.sort((a, b) => a.title.localeCompare(b.title)).forEach(pattern => {
            const option = document.createElement('option');
            option.value = pattern.key;
            option.textContent = `${pattern.title} - ${pattern.difficulty}`;
            optgroup.appendChild(option);
        });
        
        dropdown.appendChild(optgroup);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Pattern selection
    document.getElementById('patternDropdown').addEventListener('change', handlePatternSelect);
    
    // Custom pattern modal
    document.getElementById('customPatternBtn').addEventListener('click', openCustomModal);
    document.getElementById('saveCustomBtn').addEventListener('click', saveCustomPattern);
    document.getElementById('cancelCustomBtn').addEventListener('click', closeCustomModal);
    document.querySelector('.modal-close').addEventListener('click', closeCustomModal);
    
    // Testing functionality
    document.getElementById('testBtn').addEventListener('click', testPattern);
    document.getElementById('clearBtn').addEventListener('click', clearAll);
    document.getElementById('exampleBtn').addEventListener('click', loadExample);
    
    // Copy functionality
    document.getElementById('copyRegexBtn').addEventListener('click', copyRegex);
    
    // Method buttons
    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.addEventListener('click', (e) => showMethodExample(e.target.dataset.method));
    });

    // Tool buttons
    document.getElementById('regexBuilderBtn').addEventListener('click', showPatternBuilder);
    document.getElementById('cheatSheetBtn').addEventListener('click', toggleCheatSheet);
    document.getElementById('benchmarkBtn').addEventListener('click', showBenchmark);
    document.getElementById('exportBtn').addEventListener('click', exportPatterns);

    // Real-time testing on input change
    document.getElementById('regexInput').addEventListener('input', debounce(testPattern, 300));
    document.getElementById('testString').addEventListener('input', debounce(testPattern, 300));
    
    // Flag checkboxes
    document.querySelectorAll('.flag-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', testPattern);
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('customModal');
        if (e.target === modal) {
            closeCustomModal();
        }
    });
}

// Handle pattern selection from dropdown
function handlePatternSelect() {
    const dropdown = document.getElementById('patternDropdown');
    const selectedKey = dropdown.value;
    
    if (!selectedKey) {
        document.getElementById('detailsSection').style.display = 'none';
        return;
    }

    const allPatterns = { ...regexPatterns, ...customPatterns };
    currentPattern = allPatterns[selectedKey];
    
    if (currentPattern) {
        displayPatternDetails(currentPattern);
        loadPatternIntoTester(currentPattern);
        document.getElementById('detailsSection').style.display = 'block';
    }
}

// Display pattern details
function displayPatternDetails(pattern) {
    document.getElementById('patternTitle').textContent = pattern.title;
    document.getElementById('patternCategory').textContent = pattern.category || 'Custom';
    document.getElementById('patternDifficulty').textContent = pattern.difficulty || 'Medium';
    
    // Update difficulty badge color
    const difficultyBadge = document.getElementById('patternDifficulty');
    difficultyBadge.className = 'difficulty-badge';
    if (pattern.difficulty === 'Easy') difficultyBadge.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
    else if (pattern.difficulty === 'Hard') difficultyBadge.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
    
    document.getElementById('patternCode').textContent = `/${pattern.regex}/g`;
    document.getElementById('patternDescription').textContent = pattern.description;
    
    // Display examples
    const examplesContainer = document.getElementById('patternExamples');
    examplesContainer.innerHTML = '';
    
    if (pattern.examples) {
        pattern.examples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'example-item';
            
            const exampleText = document.createElement('div');
            exampleText.className = 'example-text';
            exampleText.textContent = example;
            
            const exampleResult = document.createElement('div');
            exampleResult.className = 'example-result';
            
            try {
                const regex = new RegExp(pattern.regex, 'g');
                const matches = example.match(regex);
                exampleResult.textContent = matches ? `✅ Matches: ${matches.join(', ')}` : '❌ No match';
            } catch (error) {
                exampleResult.textContent = '⚠️ Invalid regex';
            }
            
            exampleDiv.appendChild(exampleText);
            exampleDiv.appendChild(exampleResult);
            examplesContainer.appendChild(exampleDiv);
        });
    }
}

// Load pattern into tester
function loadPatternIntoTester(pattern) {
    // Load the regex pattern
    document.getElementById('regexInput').value = pattern.regex;
    
    // Clear flags first
    document.querySelectorAll('.flag-checkbox').forEach(cb => cb.checked = false);
    
    // Set appropriate flags based on pattern
    if (pattern.regex.includes('(?i)') || pattern.category === 'Security') {
        document.getElementById('flagI').checked = true;
    }
    
    // Set global flag for better testing unless it's an anchor pattern
    if (!pattern.regex.includes('^') || !pattern.regex.includes('$')) {
        document.getElementById('flagG').checked = true;
    }
    
    // Load examples as test string
    if (pattern.examples && pattern.examples.length > 0) {
        // Create a comprehensive test string with all examples
        const testText = pattern.examples.join('\n');
        document.getElementById('testString').value = testText;
    } else {
        // Fallback test string
        document.getElementById('testString').value = 'Enter your test text here';
    }
    
    // Test the pattern after a short delay to ensure DOM updates
    setTimeout(() => {
        testPattern();
    }, 100);
}

// Test the current pattern
function testPattern() {
    const regexInput = document.getElementById('regexInput').value.trim();
    const testString = document.getElementById('testString').value;
    
    // Validate regex pattern
    validateRegexPattern(regexInput);
    
    if (!regexInput) {
        clearResults();
        return;
    }

    if (!testString) {
        // Show pattern info even without test string
        document.getElementById('matchStatus').textContent = 'Enter test string to see results';
        document.getElementById('matchStatus').className = 'status-indicator status-neutral';
        return;
    }

    try {
        // Build flags
        const flags = [];
        if (document.getElementById('flagG').checked) flags.push('g');
        if (document.getElementById('flagI').checked) flags.push('i');
        if (document.getElementById('flagM').checked) flags.push('m');
        if (document.getElementById('flagS').checked) flags.push('s');
        
        const regex = new RegExp(regexInput, flags.join(''));
        
        // Test the pattern with different methods
        let matches = [];
        
        if (flags.includes('g')) {
            // Use matchAll for global flag
            matches = Array.from(testString.matchAll(regex));
        } else {
            // Use match for non-global
            const singleMatch = testString.match(regex);
            if (singleMatch) {
                matches = [singleMatch];
            }
        }
        
        const hasMatches = matches.length > 0;
        
        // Update results
        updateMatchStatus(hasMatches);
        updateMatchCount(matches.length);
        updateMatchResults(matches);
        updateHighlightedText(testString, regex);
        
    } catch (error) {
        updateMatchStatus(false, error.message);
        updateMatchCount(0);
        updateMatchResults([]);
        updateHighlightedText(testString, null);
    }
}

// Validate regex pattern and provide feedback
function validateRegexPattern(pattern) {
    const validationElement = document.getElementById('regexValidation');
    const messageElement = validationElement.querySelector('.validation-message');
    
    if (!pattern) {
        validationElement.style.display = 'none';
        return;
    }
    
    try {
        // Test if pattern is valid
        new RegExp(pattern);
        
        // Provide helpful feedback
        let message = '✓ Valid regex pattern';
        let className = 'valid';
        
        // Check for common issues and provide warnings
        if (pattern.includes('.*.*')) {
            message = '⚠️ Multiple .* may cause performance issues';
            className = 'warning';
        } else if (pattern.length > 100) {
            message = '⚠️ Very long pattern - consider simplifying';
            className = 'warning';
        } else if (pattern.includes('(') && !pattern.includes(')')) {
            message = '⚠️ Unmatched parentheses detected';
            className = 'warning';
        } else if (pattern.includes('[') && !pattern.includes(']')) {
            message = '⚠️ Unmatched square brackets detected';
            className = 'warning';
        } else if (pattern.includes('+*') || pattern.includes('*+') || pattern.includes('++') || pattern.includes('**')) {
            message = '⚠️ Conflicting quantifiers detected';
            className = 'warning';
        }
        
        // Add helpful tips
        if (pattern.includes('\\d') || pattern.includes('\\w') || pattern.includes('\\s')) {
            message += ' (using character classes)';
        }
        if (pattern.includes('(?=') || pattern.includes('(?!') || pattern.includes('(?<=') || pattern.includes('(?<!')) {
            message += ' (using lookarounds)';
        }
        
        validationElement.className = `regex-validation ${className}`;
        messageElement.textContent = message;
        validationElement.style.display = 'block';
        
    } catch (error) {
        validationElement.className = 'regex-validation invalid';
        messageElement.textContent = `❌ Invalid pattern: ${error.message}`;
        validationElement.style.display = 'block';
    }
}

// Update match status
function updateMatchStatus(hasMatches, errorMessage = null) {
    const statusElement = document.getElementById('matchStatus');
    
    if (errorMessage) {
        statusElement.textContent = `Error: ${errorMessage}`;
        statusElement.className = 'status-indicator status-failure';
    } else if (hasMatches) {
        statusElement.textContent = 'Pattern matches found!';
        statusElement.className = 'status-indicator status-success';
    } else {
        statusElement.textContent = 'No matches found';
        statusElement.className = 'status-indicator status-failure';
    }
}

// Update match count
function updateMatchCount(count) {
    document.getElementById('matchCount').textContent = count;
}

// Update match results
function updateMatchResults(matches) {
    const resultsContainer = document.getElementById('matchResults');
    
    if (matches.length === 0) {
        resultsContainer.innerHTML = 'No matches to display';
        return;
    }
    
    resultsContainer.innerHTML = '';
    
    matches.forEach((match, index) => {
        const matchDiv = document.createElement('div');
        matchDiv.className = 'match-item';
        
        const matchText = document.createElement('div');
        matchText.textContent = `"${match[0]}"`;
        
        const matchInfo = document.createElement('div');
        matchInfo.className = 'match-info';
        matchInfo.textContent = `Match ${index + 1} at position ${match.index}`;
        
        if (match.length > 1) {
            const groupsInfo = document.createElement('div');
            groupsInfo.className = 'match-info';
            groupsInfo.textContent = `Groups: ${match.slice(1).map(g => `"${g || ''}"`).join(', ')}`;
            matchDiv.appendChild(groupsInfo);
        }
        
        matchDiv.appendChild(matchText);
        matchDiv.appendChild(matchInfo);
        resultsContainer.appendChild(matchDiv);
    });
}

// Update highlighted text
function updateHighlightedText(text, regex) {
    const highlightContainer = document.getElementById('highlightedText');
    
    if (!regex || !text) {
        highlightContainer.textContent = text || 'No text to highlight';
        return;
    }
    
    try {
        const highlightedText = text.replace(regex, (match) => `<span class="highlight">${escapeHtml(match)}</span>`);
        highlightContainer.innerHTML = highlightedText || text;
    } catch (error) {
        highlightContainer.textContent = text;
    }
}

// Clear all results
function clearResults() {
    document.getElementById('matchStatus').textContent = 'No test performed';
    document.getElementById('matchStatus').className = 'status-indicator status-neutral';
    document.getElementById('matchCount').textContent = '0';
    document.getElementById('matchResults').innerHTML = 'No matches to display';
    document.getElementById('highlightedText').innerHTML = 'No text to highlight';
}

// Clear all inputs and results
function clearAll() {
    document.getElementById('regexInput').value = '';
    document.getElementById('testString').value = '';
    document.querySelectorAll('.flag-checkbox').forEach(cb => cb.checked = false);
    document.getElementById('patternDropdown').value = '';
    document.getElementById('detailsSection').style.display = 'none';
    clearResults();
    document.getElementById('methodOutput').innerHTML = 'Select a method to see how it works with your regex';
}

// Load example from current pattern
function loadExample() {
    if (currentPattern && currentPattern.examples) {
        // Use pattern-specific examples
        document.getElementById('testString').value = currentPattern.examples.join('\n');
    } else {
        // Load comprehensive test data based on current regex
        const regexInput = document.getElementById('regexInput').value.trim();
        let exampleText = '';
        
        if (regexInput.includes('\\d')) {
            exampleText += 'Numbers: 123, 456, 789, 42, 007\n';
        }
        if (regexInput.includes('@') || regexInput.includes('email')) {
            exampleText += 'Emails: test@example.com, user@domain.org, invalid.email\n';
        }
        if (regexInput.includes('\\w') || regexInput.includes('[a-z]')) {
            exampleText += 'Words: Hello, WORLD, JavaScript, test123, user_name\n';
        }
        if (regexInput.includes('http') || regexInput.includes('url')) {
            exampleText += 'URLs: https://www.example.com, http://test.org, ftp://files.com\n';
        }
        if (regexInput.includes('\\s')) {
            exampleText += 'Whitespace: Hello World, multiple   spaces, tab\there\n';
        }
        
        // Add comprehensive default if nothing specific
        if (!exampleText) {
            exampleText = `Sample text for testing regex patterns:

Text with UPPERCASE and lowercase letters
Numbers: 123, 456, 789, 42, 007
Emails: test@example.com, user@domain.org, invalid.email
Dates: 2023-12-25, 01/15/2024, 1990-06-15
Phone numbers: (555) 123-4567, +1-800-555-0123, 123.456.7890
URLs: https://www.example.com, http://test.org
Special characters: !@#$%^&*()_+-=[]{}|;:,.<>?
Passwords: MyPass123!, weakpass, STRONG@Pass123
Hexadecimal colors: #FF0000, #00ff00, #123ABC
IP addresses: 192.168.1.1, 10.0.0.1, 256.1.1.1
Words with boundaries: cat, category, concatenate
Quoted text: "Hello World", 'Single quotes'
File extensions: image.jpg, document.pdf, script.js`;
        }
        
        document.getElementById('testString').value = exampleText;
    }
    
    testPattern();
}

// Copy regex to clipboard
function copyRegex() {
    const regexCode = document.getElementById('patternCode').textContent;
    navigator.clipboard.writeText(regexCode).then(() => {
        const btn = document.getElementById('copyRegexBtn');
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            btn.innerHTML = originalIcon;
        }, 1000);
    });
}

// Show method examples
function showMethodExample(method) {
    // Update active button
    document.querySelectorAll('.method-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-method="${method}"]`).classList.add('active');
    
    const regexInput = document.getElementById('regexInput').value.trim();
    const testString = document.getElementById('testString').value;
    const output = document.getElementById('methodOutput');
    
    if (!regexInput || !testString) {
        output.innerHTML = 'Please enter both a regex pattern and test string to see method examples.';
        return;
    }

    try {
        const flags = [];
        if (document.getElementById('flagG').checked) flags.push('g');
        if (document.getElementById('flagI').checked) flags.push('i');
        if (document.getElementById('flagM').checked) flags.push('m');
        if (document.getElementById('flagS').checked) flags.push('s');
        
        const regex = new RegExp(regexInput, flags.join(''));
        let result;
        let code;

        switch (method) {
            case 'test':
                result = regex.test(testString);
                code = `const regex = /${regexInput}/${flags.join('')};
const text = "${escapeString(testString)}";
const result = regex.test(text);
console.log(result); // ${result}`;
                break;

            case 'match':
                result = testString.match(regex);
                code = `const regex = /${regexInput}/${flags.join('')};
const text = "${escapeString(testString)}";
const result = text.match(regex);
console.log(result);
// ${JSON.stringify(result, null, 2)}`;
                break;

            case 'search':
                result = testString.search(regex);
                code = `const regex = /${regexInput}/${flags.join('')};
const text = "${escapeString(testString)}";
const result = text.search(regex);
console.log(result); // ${result} (position of first match)`;
                break;

            case 'replace':
                result = testString.replace(regex, '[MATCH]');
                code = `const regex = /${regexInput}/${flags.join('')};
const text = "${escapeString(testString)}";
const result = text.replace(regex, '[MATCH]');
console.log(result);
// "${escapeString(result)}"`;
                break;

            case 'split':
                result = testString.split(regex);
                code = `const regex = /${regexInput}/${flags.join('')};
const text = "${escapeString(testString)}";
const result = text.split(regex);
console.log(result);
// ${JSON.stringify(result, null, 2)}`;
                break;

            case 'matchAll':
                const matches = Array.from(testString.matchAll(regex));
                code = `const regex = /${regexInput}/${flags.join('')};
const text = "${escapeString(testString)}";
const matches = Array.from(text.matchAll(regex));
console.log(matches);
// Found ${matches.length} matches:`;
                matches.forEach((match, i) => {
                    code += `\n// Match ${i + 1}: "${match[0]}" at position ${match.index}`;
                });
                break;
        }

        output.innerHTML = code;
    } catch (error) {
        output.innerHTML = `Error: ${error.message}`;
    }
}

// Custom pattern modal functions
function openCustomModal() {
    document.getElementById('customModal').style.display = 'block';
}

function closeCustomModal() {
    document.getElementById('customModal').style.display = 'none';
    clearCustomForm();
}

function clearCustomForm() {
    document.getElementById('customName').value = '';
    document.getElementById('customRegex').value = '';
    document.getElementById('customDescription').value = '';
    document.getElementById('customExamples').value = '';
}

function saveCustomPattern() {
    const name = document.getElementById('customName').value.trim();
    const regex = document.getElementById('customRegex').value.trim();
    const description = document.getElementById('customDescription').value.trim();
    const examples = document.getElementById('customExamples').value.trim().split('\n').filter(e => e.trim());

    if (!name || !regex) {
        alert('Please provide both name and regex pattern.');
        return;
    }

    try {
        // Validate regex
        new RegExp(regex);
        
        // Create pattern object
        const patternKey = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const pattern = {
            title: name,
            category: 'Custom',
            difficulty: 'Custom',
            regex: regex,
            description: description || 'Custom user-defined pattern',
            examples: examples.length ? examples : ['test example']
        };

        // Save to localStorage
        customPatterns[patternKey] = pattern;
        localStorage.setItem('customPatterns', JSON.stringify(customPatterns));

        // Refresh dropdown
        initializeDropdown();
        
        // Select the new pattern
        document.getElementById('patternDropdown').value = patternKey;
        handlePatternSelect();
        
        closeCustomModal();
        
    } catch (error) {
        alert(`Invalid regex pattern: ${error.message}`);
    }
}

// Load a default example pattern on page load
function loadExamplePattern() {
    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(() => {
        const dropdown = document.getElementById('patternDropdown');
        // Try to load email-basic, fallback to first available pattern
        if (dropdown.querySelector('option[value="email-basic"]')) {
            dropdown.value = 'email-basic';
        } else {
            const firstOption = dropdown.querySelector('option[value]:not([value=""])');
            if (firstOption) {
                dropdown.value = firstOption.value;
            }
        }
        handlePatternSelect();
    }, 500);
}

// Utility functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeString(str) {
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Advanced Tools Functions

// Toggle cheat sheet visibility
function toggleCheatSheet() {
    const cheatSheet = document.getElementById('cheatsheetSection');
    const button = document.getElementById('cheatSheetBtn');
    
    if (cheatSheet.style.display === 'none' || !cheatSheet.style.display) {
        cheatSheet.style.display = 'block';
        button.classList.add('active');
        cheatSheet.scrollIntoView({ behavior: 'smooth' });
        
        // Clear other tool active states
        document.querySelectorAll('.tool-btn').forEach(btn => {
            if (btn.id !== 'cheatSheetBtn') btn.classList.remove('active');
        });
    } else {
        cheatSheet.style.display = 'none';
        button.classList.remove('active');
    }
}

// Show pattern builder tool
function showPatternBuilder() {
    const output = document.getElementById('toolsOutput');
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('regexBuilderBtn').classList.add('active');
    
    output.innerHTML = `
        <div class="builder-container">
            <h3>Pattern Builder</h3>
            <p>Build regex patterns step by step:</p>
            
            <div id="builderSteps">
                <div class="builder-row">
                    <select class="builder-select" onchange="updateBuilderPattern()">
                        <option value="">Choose pattern type...</option>
                        <option value="literal">Literal Text</option>
                        <option value="digits">Digits</option>
                        <option value="letters">Letters</option>
                        <option value="whitespace">Whitespace</option>
                        <option value="any">Any Character</option>
                        <option value="start">Start of Line</option>
                        <option value="end">End of Line</option>
                    </select>
                    <input type="text" class="builder-input" placeholder="Enter value" onchange="updateBuilderPattern()">
                    <select class="builder-select" onchange="updateBuilderPattern()">
                        <option value="one">Exactly One</option>
                        <option value="optional">Optional (?)</option>
                        <option value="zeromore">Zero or More (*)</option>
                        <option value="onemore">One or More (+)</option>
                        <option value="custom">Custom {n,m}</option>
                    </select>
                    <button class="add-builder-btn" onclick="addBuilderStep()">Add Step</button>
                </div>
            </div>
            
            <div class="builder-output" id="builderOutput">
                ^(your pattern will appear here)$
            </div>
            
            <button class="action-btn" onclick="useBuilderPattern()" style="margin-top: 15px;">
                <i class="fas fa-arrow-up"></i> Use This Pattern
            </button>
        </div>
    `;
}

// Update builder pattern
function updateBuilderPattern() {
    const steps = document.querySelectorAll('#builderSteps .builder-row');
    let pattern = '';
    
    steps.forEach(step => {
        const type = step.querySelector('.builder-select').value;
        const value = step.querySelector('.builder-input').value;
        const quantifier = step.querySelectorAll('.builder-select')[1].value;
        
        if (!type) return;
        
        let stepPattern = '';
        
        switch (type) {
            case 'literal':
                stepPattern = value ? escapeRegex(value) : 'text';
                break;
            case 'digits':
                stepPattern = '\\d';
                break;
            case 'letters':
                stepPattern = '[a-zA-Z]';
                break;
            case 'whitespace':
                stepPattern = '\\s';
                break;
            case 'any':
                stepPattern = '.';
                break;
            case 'start':
                stepPattern = '^';
                break;
            case 'end':
                stepPattern = '$';
                break;
        }
        
        // Apply quantifier
        switch (quantifier) {
            case 'optional':
                stepPattern += '?';
                break;
            case 'zeromore':
                stepPattern += '*';
                break;
            case 'onemore':
                stepPattern += '+';
                break;
            case 'custom':
                stepPattern += '{1,3}'; // Default example
                break;
        }
        
        pattern += stepPattern;
    });
    
    document.getElementById('builderOutput').textContent = pattern || 'Choose pattern elements above';
}

// Add new builder step
function addBuilderStep() {
    const container = document.getElementById('builderSteps');
    const newRow = document.createElement('div');
    newRow.className = 'builder-row';
    newRow.innerHTML = `
        <select class="builder-select" onchange="updateBuilderPattern()">
            <option value="">Choose pattern type...</option>
            <option value="literal">Literal Text</option>
            <option value="digits">Digits</option>
            <option value="letters">Letters</option>
            <option value="whitespace">Whitespace</option>
            <option value="any">Any Character</option>
            <option value="start">Start of Line</option>
            <option value="end">End of Line</option>
        </select>
        <input type="text" class="builder-input" placeholder="Enter value" onchange="updateBuilderPattern()">
        <select class="builder-select" onchange="updateBuilderPattern()">
            <option value="one">Exactly One</option>
            <option value="optional">Optional (?)</option>
            <option value="zeromore">Zero or More (*)</option>
            <option value="onemore">One or More (+)</option>
            <option value="custom">Custom {n,m}</option>
        </select>
        <button class="add-builder-btn" onclick="this.parentElement.remove(); updateBuilderPattern();">Remove</button>
    `;
    container.appendChild(newRow);
}

// Use builder pattern
function useBuilderPattern() {
    const pattern = document.getElementById('builderOutput').textContent;
    if (pattern && pattern !== 'Choose pattern elements above') {
        document.getElementById('regexInput').value = pattern;
        testPattern();
    }
}

// Show performance benchmark
function showBenchmark() {
    const output = document.getElementById('toolsOutput');
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('benchmarkBtn').classList.add('active');
    
    const regexInput = document.getElementById('regexInput').value.trim();
    const testString = document.getElementById('testString').value;
    
    if (!regexInput || !testString) {
        output.innerHTML = `
            <div class="benchmark-container">
                <h3>Performance Test</h3>
                <p>Enter a regex pattern and test string to benchmark performance.</p>
            </div>
        `;
        return;
    }
    
    try {
        // Run performance tests
        const iterations = 10000;
        const regex = new RegExp(regexInput, 'g');
        
        // Test different methods
        const tests = {
            test: () => regex.test(testString),
            match: () => testString.match(regex),
            search: () => testString.search(regex),
            replace: () => testString.replace(regex, 'X')
        };
        
        const results = {};
        
        Object.entries(tests).forEach(([method, testFunc]) => {
            const start = performance.now();
            for (let i = 0; i < iterations; i++) {
                regex.lastIndex = 0; // Reset for global regex
                testFunc();
            }
            const end = performance.now();
            results[method] = (end - start).toFixed(2);
        });
        
        output.innerHTML = `
            <div class="benchmark-container">
                <h3>Performance Test Results</h3>
                <p>Tested ${iterations.toLocaleString()} iterations each:</p>
                
                <div class="benchmark-results">
                    <div class="benchmark-metric">
                        <div class="metric-value">${results.test}ms</div>
                        <div class="metric-label">test()</div>
                    </div>
                    <div class="benchmark-metric">
                        <div class="metric-value">${results.match}ms</div>
                        <div class="metric-label">match()</div>
                    </div>
                    <div class="benchmark-metric">
                        <div class="metric-value">${results.search}ms</div>
                        <div class="metric-label">search()</div>
                    </div>
                    <div class="benchmark-metric">
                        <div class="metric-value">${results.replace}ms</div>
                        <div class="metric-label">replace()</div>
                    </div>
                </div>
                
                <p style="margin-top: 15px; font-size: 0.9rem; color: #718096;">
                    Lower values indicate better performance. Results may vary between runs.
                </p>
            </div>
        `;
        
    } catch (error) {
        output.innerHTML = `
            <div class="benchmark-container">
                <h3>Performance Test</h3>
                <p style="color: #e53e3e;">Error: ${error.message}</p>
            </div>
        `;
    }
}

// Export patterns functionality
function exportPatterns() {
    const output = document.getElementById('toolsOutput');
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('exportBtn').classList.add('active');
    
    const allPatterns = { ...regexPatterns, ...customPatterns };
    const exportData = {
        exportDate: new Date().toISOString(),
        totalPatterns: Object.keys(allPatterns).length,
        patterns: allPatterns
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    output.innerHTML = `
        <div class="benchmark-container">
            <h3>Export Patterns</h3>
            <p>Your regex patterns are ready for export:</p>
            
            <div style="margin: 15px 0;">
                <strong>Total Patterns:</strong> ${exportData.totalPatterns}<br>
                <strong>Built-in Patterns:</strong> ${Object.keys(regexPatterns).length}<br>
                <strong>Custom Patterns:</strong> ${Object.keys(customPatterns).length}
            </div>
            
            <div style="display: flex; gap: 15px; margin-top: 20px;">
                <a href="${url}" download="regex-patterns.json" class="action-btn">
                    <i class="fas fa-download"></i> Download JSON
                </a>
                <button class="action-btn" onclick="copyExportData()">
                    <i class="fas fa-copy"></i> Copy to Clipboard
                </button>
            </div>
            
            <textarea readonly style="width: 100%; height: 200px; margin-top: 15px; font-family: monospace; font-size: 0.8rem;" id="exportTextarea">${jsonString}</textarea>
        </div>
    `;
}

// Copy export data to clipboard
function copyExportData() {
    const textarea = document.getElementById('exportTextarea');
    textarea.select();
    document.execCommand('copy');
    
    // Show feedback
    const button = event.target.closest('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 2000);
}

// Escape special regex characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Insert cheat sheet pattern into regex input
function insertCheatPattern(pattern) {
    const regexInput = document.getElementById('regexInput');
    const currentValue = regexInput.value;
    const cursorPos = regexInput.selectionStart;
    
    // Insert pattern at cursor position
    const newValue = currentValue.slice(0, cursorPos) + pattern + currentValue.slice(cursorPos);
    regexInput.value = newValue;
    
    // Move cursor after inserted pattern
    regexInput.focus();
    regexInput.setSelectionRange(cursorPos + pattern.length, cursorPos + pattern.length);
    
    // Test the updated pattern
    testPattern();
}

// Load complete pattern from cheat sheet
function loadCheatPattern(pattern) {
    document.getElementById('regexInput').value = pattern;
    
    // Clear flags and set appropriate ones
    document.querySelectorAll('.flag-checkbox').forEach(cb => cb.checked = false);
    
    // Set global flag for better testing
    document.getElementById('flagG').checked = true;
    
    // Set case insensitive for certain patterns
    if (pattern.includes('a-z') && pattern.includes('A-Z')) {
        document.getElementById('flagI').checked = true;
    }
    
    // Load appropriate test examples
    loadExample();
    
    // Test the pattern
    testPattern();
}

// Show specific cheat sheet tab
function showCheatTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.cheat-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.cheat-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(`cheat-${tabName}`).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Toggle flag from cheat sheet
function toggleFlag(flagName) {
    const flagCheckbox = document.getElementById(`flag${flagName.toUpperCase()}`);
    if (flagCheckbox) {
        flagCheckbox.checked = !flagCheckbox.checked;
        testPattern();
    }
}
