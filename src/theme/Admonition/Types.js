import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function MyCustomAdmonition(props) {
  return (
    <div className={`my-custom-admonition ${props.isDarkMode ? 'dark-mode' : ''}`} style={{ 
      border: '2px solid #8dc548', 
      borderRadius: '8px', 
      padding: '16px', 
      backgroundColor: 'rgba(141, 197, 72, 0.1)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#8dc548',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '12px',
          animation: 'bounce 1s infinite alternate',
        }}>
          {/* Remplacez l'ancien SVG par le nouveau SVG fourni */}
          <svg fill="#ffffff" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.418 489.418">
            <g>
              <path d="M244.709,389.496c18.736,0,34.332-14.355,35.91-33.026l24.359-290.927c1.418-16.873-4.303-33.553-15.756-46.011
              C277.783,7.09,261.629,0,244.709,0s-33.074,7.09-44.514,19.532C188.74,31.99,183.022,48.67,184.44,65.543l24.359,290.927
              C210.377,375.141,225.973,389.496,244.709,389.496z"/>
              <path d="M244.709,410.908c-21.684,0-39.256,17.571-39.256,39.256c0,21.683,17.572,39.254,39.256,39.254
              s39.256-17.571,39.256-39.254C283.965,428.479,266.393,410.908,244.709,410.908z"/>
            </g>
          </svg>
        </div>
        <h5 style={{ color: '#8dc548', fontSize: '24px', margin: '0', }}>
          {props.title}
        </h5>
      </div>
      <div className={`admonition-content ${props.isDarkMode ? 'dark-mode-text' : ''}`} style={{ fontSize: '18px', lineHeight: '1.6' }}>
        {props.children}
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  'jerico-alert': MyCustomAdmonition,
};

export default AdmonitionTypes;
