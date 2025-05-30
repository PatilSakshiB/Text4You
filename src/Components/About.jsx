import React from 'react'

function About(props) {
  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>About Text4You</h2>
      <p className="mt-3">
        <strong>Text4You</strong> is a user-friendly text utility tool designed to help you efficiently manipulate and analyze your text. Whether you're a writer, student, developer, or content creator, this app offers powerful features to enhance your text productivity.
      </p>

      <h4 className="mt-4">Key Features</h4>
      <ul>
        <li><strong>Sentence Case:</strong> Capitalizes the beginning of each sentence automatically.</li>
        <li><strong>Upper Case:</strong> Converts the entire text to UPPERCASE.</li>
        <li><strong>Lower Case:</strong> Converts the entire text to lowercase.</li>
        <li><strong>Title Case:</strong> Capitalizes the first letter of every word.</li>
        <li><strong>Remove Extra Spaces:</strong> Eliminates unnecessary white spaces from your text.</li>
        <li><strong>Copy to Clipboard:</strong> Easily copies your text for quick sharing or reuse.</li>
        <li><strong>Clear Text:</strong> Instantly clears the text area.</li>
      </ul>

      <h4 className="mt-4">Additional Benefits</h4>
      <ul>
        <li>Live word, character, and sentence count.</li>
        <li>Responsive design with light and dark mode support.</li>
      </ul>
    </div>
  )
}

export default About
