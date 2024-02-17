import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  useEffect(() => {});

  return (
    <div>
      <nav class='main_heading'>
        <div class='d-flex'>
          <div class='d-flex main_header justify-content-center'>
            <div class='center-content d-flex align-items-center'>
              <Link className='nav-link demo__navLink' to='/dashboard'>
                <div class='d-flex active_button header_button'>
                  <svg
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.5502 3L4.9502 3L4.9502 13.2L11.5502 13.2L11.5502 3Z'
                      stroke='#565D6D'
                      stroke-width='1.44'
                      stroke-miterlimit='10'
                      stroke-linecap='square'
                    />
                    <path
                      d='M11.5502 15.6L4.9502 15.6L4.9502 21H11.5502V15.6Z'
                      stroke='#565D6D'
                      stroke-width='1.44'
                      stroke-miterlimit='10'
                      stroke-linecap='square'
                    />
                    <path
                      d='M20.5502 3L13.9502 3L13.9502 8.4L20.5502 8.4V3Z'
                      stroke='#565D6D'
                      stroke-width='1.44'
                      stroke-miterlimit='10'
                      stroke-linecap='square'
                    />
                    <path
                      d='M20.5502 10.8L13.9502 10.8L13.9502 21H20.5502L20.5502 10.8Z'
                      stroke='#565D6D'
                      stroke-width='1.44'
                      stroke-miterlimit='10'
                      stroke-linecap='square'
                    />
                  </svg>
                  <span>Dashboard</span>
                </div>
              </Link>
              <Link className='nav-link demo__navLink' to='/task'>
                <div class='d-flex header_button'>
                  <svg
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_101_424)'>
                      <path
                        d='M14.2498 7.49999C14.2498 7.30108 14.3289 7.11031 14.4695 6.96966C14.6102 6.82901 14.8009 6.74999 14.9998 6.74999L23.9998 6.74999C24.1988 6.74999 24.3895 6.82901 24.5302 6.96966C24.6708 7.11031 24.7498 7.30108 24.7498 7.49999C24.7498 7.6989 24.6708 7.88967 24.5302 8.03032C24.3895 8.17097 24.1988 8.24999 23.9998 8.24999L14.9998 8.24999C14.8009 8.24999 14.6102 8.17097 14.4695 8.03032C14.3289 7.88967 14.2498 7.6989 14.2498 7.49999ZM23.9998 11.25L14.9998 11.25C14.8009 11.25 14.6102 11.329 14.4695 11.4697C14.3289 11.6103 14.2498 11.8011 14.2498 12C14.2498 12.1989 14.3289 12.3897 14.4695 12.5303C14.6102 12.671 14.8009 12.75 14.9998 12.75L23.9998 12.75C24.1988 12.75 24.3895 12.671 24.5302 12.5303C24.6708 12.3897 24.7498 12.1989 24.7498 12C24.7498 11.8011 24.6708 11.6103 24.5302 11.4697C24.3895 11.329 24.1988 11.25 23.9998 11.25ZM23.9998 15.75L17.2498 15.75C17.0509 15.75 16.8602 15.829 16.7195 15.9697C16.5789 16.1103 16.4998 16.3011 16.4998 16.5C16.4998 16.6989 16.5789 16.8897 16.7195 17.0303C16.8602 17.171 17.0509 17.25 17.2498 17.25L23.9998 17.25C24.1988 17.25 24.3895 17.171 24.5302 17.0303C24.6708 16.8897 24.7498 16.6989 24.7498 16.5C24.7498 16.3011 24.6708 16.1103 24.5302 15.9697C24.3895 15.829 24.1988 15.75 23.9998 15.75ZM14.9764 17.8125C15.0009 17.9079 15.0064 18.0072 14.9925 18.1047C14.9787 18.2023 14.9457 18.2961 14.8956 18.3809C14.8454 18.4657 14.7791 18.5398 14.7003 18.5989C14.6215 18.6581 14.5318 18.7011 14.4364 18.7256C14.3753 18.7421 14.3122 18.7503 14.2489 18.75C14.0826 18.7501 13.9209 18.6949 13.7894 18.593C13.6579 18.4912 13.5639 18.3485 13.5223 18.1875C12.9448 15.9431 10.678 14.25 8.2489 14.25C5.81984 14.25 3.55297 15.9422 2.97547 18.1875C2.92574 18.3802 2.8015 18.5452 2.63008 18.6463C2.45866 18.7474 2.2541 18.7763 2.0614 18.7266C1.86871 18.6768 1.70366 18.5526 1.60256 18.3812C1.50147 18.2097 1.47261 18.0052 1.52234 17.8125C2.0464 15.7772 3.56984 14.1291 5.50297 13.3125C4.75862 12.7392 4.21239 11.9473 3.94089 11.0478C3.66938 10.1483 3.68622 9.18645 3.98904 8.29704C4.29186 7.40763 4.86547 6.63532 5.62942 6.0884C6.39338 5.54149 7.30936 5.24741 8.2489 5.24741C9.18845 5.24741 10.1044 5.54149 10.8684 6.0884C11.6323 6.63532 12.2059 7.40763 12.5088 8.29704C12.8116 9.18645 12.8284 10.1483 12.5569 11.0478C12.2854 11.9473 11.7392 12.7392 10.9948 13.3125C12.9289 14.1291 14.4523 15.7772 14.9764 17.8125ZM8.24984 12.75C8.84319 12.75 9.4232 12.574 9.91655 12.2444C10.4099 11.9148 10.7944 11.4462 11.0215 10.898C11.2485 10.3499 11.308 9.74666 11.1922 9.16472C11.0764 8.58278 10.7907 8.04823 10.3712 7.62867C9.9516 7.20911 9.41706 6.92339 8.83511 6.80763C8.25317 6.69188 7.64997 6.75129 7.10179 6.97835C6.55361 7.20541 6.08508 7.58993 5.75543 8.08328C5.42579 8.57663 5.24984 9.15665 5.24984 9.74999C5.24984 10.5456 5.56591 11.3087 6.12852 11.8713C6.69113 12.4339 7.45419 12.75 8.24984 12.75Z'
                        fill='#565D6D'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_101_424'>
                        <rect
                          width='24'
                          height='24'
                          fill='white'
                          transform='translate(0.75)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span class='task_not_completed'>Task </span>
                </div>
              </Link>
            </div>
          </div>
          <div class='right-header d-flex '>
            <div class='right_header_button'>
              <img class='profile-img' src='assets/A1.jpg' alt='img' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
