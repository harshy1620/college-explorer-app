import React from "react";
import { FaArrowRight, FaDownload, FaCircle, FaCheck } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank, MdCompareArrows } from "react-icons/md";
import colleges from "../data";

const DataTable = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <table>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>CD Rank</th>
            <th style={{ width: "35%" }}>College</th>
            <th style={{ width: "15%" }}>Course Fees</th>
            <th style={{ width: "15%" }}>Placement</th>
            <th style={{ width: "15%" }}>User Reviews</th>
            <th style={{ width: "15%" }}>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <tr key={index}>
              <td>#{college.rank}</td>

              <td className="college-info">
                {/* upper division */}
                <div className="upper-div">
                  <div className="image-div">
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                    />
                  </div>
                  <div className="content-div">
                    <div>
                      <h3>{college.name}</h3>
                      <p className="address">{college.location} | {college.approvedBy} Approved</p>
                    </div>
                    <div className="college-description">
                      <p className="course">
                        {college.course}
                      </p>
                      <p className="cutoff">JEE- Advanced Cutoff : {college.cutoff}</p>
                    </div>
                  </div>
                </div>

                {/* lower division */}
                <div className="lower-div">
                  <button className="apply">
                    <FaArrowRight />
                    <p>Apply Now</p>
                  </button>
                  <button className="download">
                    <FaDownload />
                    <p>Download Brochure</p>
                  </button>
                  <button className="compare">
                    <MdCheckBoxOutlineBlank />
                    <p>Add to Compare</p>
                  </button>
                </div>
              </td>

              <td className="course-fees">
                <h3>₹ {college.fees}</h3>
                <p>BE/B.Tech</p>
                <p>- 1st Year Fees</p>
                <button className="compare-fees-button">
                  <MdCompareArrows />
                  <p>Compare Fees</p>
                </button>
              </td>

              <td className="placement">
                <div>
                  <h3>₹ {college.averagePackage}</h3>
                  <p>Average Package</p>
                </div>
                <div>
                  <h3>₹ {college.highestPackage}</h3>
                  <p>Heighest Package</p>
                </div>
                <button className="compare-fees-button">
                  <MdCompareArrows />
                  <p>Compare Fees</p>
                </button>
              </td>

              <td className="ratings">
                <div>
                  <FaCircle />
                  <p className="rating-number">{`${college.userRating}/10`}</p>
                </div>
                <p className="no-of-users">Based on {college.basedOnUser} Users</p>
                <div className="social-container">
                  <FaCheck />
                  <p className="social-life">Best in social life</p>
                </div>
              </td>

              <td className="rankings">
                <p className="rank">{college.ranking}</p>
                <div className="ranking-year">
                  <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/misc/icon-512x512.png"
                    alt="india-today"
                  />
                  <p>2023</p>
                </div>
                <div className="rankings-by">
                  <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/misc/icon-512x512.png"
                    alt="india-today"
                  />
                  <p>+9 more</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
