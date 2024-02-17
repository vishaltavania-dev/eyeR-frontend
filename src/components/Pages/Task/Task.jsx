import React from 'react';
import './Task.css';

function Task() {
  return (
    <div>
      {/*      
<!--Product Listing -->

<!-- Main Heading --> */}
      <h1 id='productlisting' class='sub_heading mt-4'>
        Product Listing
      </h1>

      <div id='table-data'>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col' class='w-20'></th>
              <th scope='col' class='w-40'>
                Task
              </th>
              <th scope='col' class='w-10'>
                Status
              </th>
              <th scope='col' class='w-10'>
                Impact
              </th>
              <th scope='col' class='w-10'>
                Trends
              </th>
            </tr>
          </thead>
          <tbody class='table-group-divider'>
            <tr>
              <th scope='row'>
                1
                {/* <!-- <label class="form-control">
              <input type="checkbox" name="checkbox-checked" checked />
              Checkbox - checked
            </label> --> */}
              </th>
              <td>Improve product description for Fried chicken</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>
                Improve response rate for Makati branch review on GrabFood
              </td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Rotate Your menu with seasonal dishes</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>
                Invest in inviting exterior, appealing signage, and
                well-maintained surroundings to attract more foot traffic
              </td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Rotate Your menu with seasonal dishes</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Rotate Your menu with seasonal dishes</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Rotate Your menu with seasonal dishes</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <!-- back to top button --> */}
      <div id='#arrow-button' class='arrow-up hide'>
        <svg
          width='46'
          height='46'
          viewBox='0 0 46 46'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23 40.25C32.5269 40.25 40.25 32.5269 40.25 23C40.25 13.4731 32.5269 5.75 23 5.75C13.4731 5.75 5.75 13.4731 5.75 23C5.75 32.5269 13.4731 40.25 23 40.25Z'
            stroke='#9095A1'
            stroke-width='2.76'
            stroke-miterlimit='10'
            stroke-linecap='square'
          />
          <path
            d='M16.1001 25.3L23.0001 18.4L29.9001 25.3'
            stroke='#9095A1'
            stroke-width='2.76'
            stroke-miterlimit='10'
            stroke-linecap='square'
          />
        </svg>
      </div>
    </div>
  );
}

export default Task;
