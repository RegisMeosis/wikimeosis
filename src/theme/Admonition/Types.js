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
          backgroundColor: 'rgb(255 255 255 / 0%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '12px',
          animation: 'bounce 1s infinite alternate',
        }}>
          <svg fill="#8dc548" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.418 489.418">
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

function InfoAdmonition(props) {
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
            backgroundColor: 'rgb(255 255 255 / 0%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '12px',
            animation: 'bounce 1s infinite alternate',
          }}>
           <svg width="800px" height="800px" viewBox="0 0 24 24" fill="#8dc548" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.75C11.8019 16.7474 11.6126 16.6676 11.4725 16.5275C11.3324 16.3874 11.2526 16.1981 11.25 16V11C11.25 10.8011 11.329 10.6103 11.4697 10.4697C11.6103 10.329 11.8011 10.25 12 10.25C12.1989 10.25 12.3897 10.329 12.5303 10.4697C12.671 10.6103 12.75 10.8011 12.75 11V16C12.7474 16.1981 12.6676 16.3874 12.5275 16.5275C12.3874 16.6676 12.1981 16.7474 12 16.75Z" fill="#8dc548"/>
            <path d="M12 9.25C11.8019 9.24741 11.6126 9.16756 11.4725 9.02747C11.3324 8.88737 11.2526 8.69811 11.25 8.5V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V8.5C12.7474 8.69811 12.6676 8.88737 12.5275 9.02747C12.3874 9.16756 12.1981 9.24741 12 9.25Z" fill="#8dc548"/>
            <path d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z" fill="#8dc548"/>
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


  function noteAdmonition(props) {
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
            backgroundColor: 'rgb(255 255 255 / 0%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '12px',
            animation: 'bounce 1s infinite alternate',
          }}>
              <svg width="400px" height="400px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 14V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H13.5M20 14L13.5 20M20 14H15.5C14.3954 14 13.5 14.8954 13.5 16V20" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

  
  function successAdmonition(props) {
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
            backgroundColor: 'rgb(255 255 255 / 0%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '12px',
            animation: 'bounce 1s infinite alternate',
          }}>
              <svg fill="#8dc548" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"/>
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

  function bulbAdmonition(props) {
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
            backgroundColor: 'rgb(255 255 255 / 0%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '12px',
            animation: 'bounce 1s infinite alternate',
          }}>
             <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z" stroke="#8dc548" stroke-width="2"/>
<path d="M12 4V3" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 6L19 5" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H21" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H3" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5L6 6" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17H14" stroke="#8dc548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
  'info-jerico': InfoAdmonition,
  'note-jerico': noteAdmonition,
  'success-jerico': successAdmonition,
  'tips-jerico': bulbAdmonition,
};

export default AdmonitionTypes;
