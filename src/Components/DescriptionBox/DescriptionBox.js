import React from 'react';
import './DescriptionBox.css';

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, lacus sed pharetra pulvinar, odio lacus lobortis mauris, non lobortis dui tortor vehicula mauris. Morbi sollicitudin placerat felis sed consectetur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, lacus sed pharetra pulvinar, odio lacus lobortis mauris, non lobortis dui tortor vehicula mauris. Morbi sollicitudin placerat felis sed consectetur.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
