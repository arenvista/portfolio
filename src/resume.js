import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './resume-styles.css'; // Make sure this file exists in the same folder

export const Resume = () => {
  return (
    <div id="content" className="content">
      <div className="header" style={{ textAlign: 'center' }}>
        <h1>Aren Vista - Curriculum Vitae</h1>
        <div>
          <a href="https://portfolio.arenvista.me">portfolio.arenvista.me</a> | arenvista1@gmail.com | 443-805-9112
        </div>
      </div>

      <div id="education" className="outline-2">
        <h2>Education</h2>
        <div className="outline-text-2">
          <table>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '40%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              <tr>
                <td>Bachelor of Science in Mathematics</td>
                <td className="right-align">University of Maryland, Baltimore County</td>
                <td className="right-align">2027</td>
              </tr>
              <tr>
                <td>Bachelor of Science in Computer Science</td>
                <td className="right-align">University of Maryland, Baltimore County</td>
                <td className="right-align">2027</td>
              </tr>
              <tr>
                <td>Bachelor of Science in Biochemistry & Molecular Biology</td>
                <td className="right-align">University of Maryland, Baltimore County</td>
                <td className="right-align">2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="experience" className="outline-2">
        <h2>Experience</h2>
        <div className="outline-text-2">
          <table>
            <tbody>
              <tr>
                <td>Undergraduate Researcher: Mathematics</td>
                <td className="right-align">December 2025 - Present</td>
              </tr>
              <tr><td className="left-align">Steven Freeland: University of Maryland, Baltimore County</td></tr>
              <tr>
                <td colSpan="3">
                  <ul>
                    <li>Classification of non-canonical amino acids</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Undergraduate Researcher: Computer Engineering</td>
                <td className="right-align">December 2025 - Present</td>
              </tr>
              <tr><td className="left-align">Riadul Islam: University of Maryland, Baltimore County</td></tr>
              <tr>
                <td colSpan="3">
                  <ul>
                    <li>Developing Spiking Neural Networks (SNNs) for the classification of temporal data.</li>
                    <li>Designing Convolutional Neural Networks (CNNs) for image classification tasks.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Project Lead - Computational Biologist</td>
                <td className="right-align">June 2021 - June 2023</td>
              </tr>
              <tr><td className="left-align">National Institute of Health</td></tr>
              <tr>
                <td colSpan="3">
                  <ul>
                    <li>Established and managed a software version control system using Git to streamline release control and coordinate development efforts across multiple laboratories.</li>
                    <li>Deployed unsupervised machine learning algorithms, including K-Means and DBSCAN, to cluster multivariate data for anomaly detection, identifying key contributors to disease pathology.</li>
                    <li>Engineered an automated data processing pipeline utilizing SWARM and High-Performance Computing (HPC) environments to generate 3D amino acid structures, optimizing viral vector payload capacity.</li>
                    <li>Developed a command-line interface (CLI) tool for sequence alignment and custom scoring of novel sequences, facilitating similarity analysis across closely related datasets.</li>
                    <li>Mentored summer interns and staff scientists in Python programming, Git version control protocols, and Bash scripting.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Undergraduate Researcher - Organic Chemistry</td>
                <td className="right-align">June 2017 - June 2020</td>
              </tr>
              <tr>
                <td className="left-align">Seley Radtke Lab: University of Maryland, Baltimore County</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <ul>
                    <li>Leveraged Python, BeautifulSoup (BS4), and Selenium to curate a comprehensive database of approved nucleoside analogues.</li>
                    <li>Devised a synthetic pathway for preparing N-glycosylated imidazole 4-boronic acids, improving reaction yields by 40%.</li>
                    <li>Engineered nucleoside analog constructs to produce novel single-chain linked nucleoside heterocycles, designated as fleximers.</li>
                    <li>Synthesized precursor molecules to support the creation of flex-Remdesivir analogues.</li>
                    <li>Synthesized flexible nucleoside analogues designed to combat infectious diseases.</li>
                    <li>Targeted viral replication complexes in SARS-CoV and Ebola.</li>
                    <li>Utilized Suzuki coupling to synthesize 7-deaza fleximer bases.</li>
                    <li>Achieved consistent high yields across a 4-step synthetic pathway.</li>
                    <li>Funded via: NIH/NIGMS T32 GM066706 (KSR and CW), NIH/NIAID R21AI135252 (KSR)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Undergraduate Researcher - Molecular Biology</td>
                <td className="right-align">June 2017 - June 2020</td>
              </tr>
              <tr><td className="left-align">Vasta Lab - IMET</td></tr>
              <tr>
                <td colSpan="3">
                  <ul>
                    <li>Formulated a synthesis scheme for lactose-conjugated Sepharose, achieving a fivefold reduction in reagent costs.</li>
                    <li>Designed and optimized primers for cloning experiments, ensuring successful gene amplification.</li>
                    <li>Directed the standardization and optimization of protein purification, characterization, and modification protocols.</li>
                    <li>Trained interns on standard laboratory operating procedures and scientific writing methodologies.</li>
                    <li>Calibrated analytical equipment and constructed calibration curves to improve accuracy on non-standard samples.</li>
                    <li>Categorized carbohydrate recognition ligands on Perkinsus parasites to assess their ecological impact on the Chesapeake Bay.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="conferences" className="outline-3">
        <h2>Conference Contributions</h2>
        <div className="outline-text-3">
          <table>
            <colgroup>
              <col style={{ width: '60%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              <tr>
                <td>Gordon Research Conference</td>
                <td className="right-align">Ventura, CA</td>
                <td className="right-align">2024</td>
              </tr>
              <tr>
                <td>Undergraduate Research and Creative Achievement Day</td>
                <td className="right-align">UMBC</td>
                <td className="right-align">2020</td>
              </tr>
              <tr>
                <td>NIH Glycoscience Research Conference</td>
                <td className="right-align">National Institutes of Health</td>
                <td className="right-align">2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="publications" className="outline-3">
        <h2>Publications</h2>
        <div className="outline-text-3">
          <p>Vasta, G. R., Feng, C., Tasumi, S., Abernathy, K., Bianchet, M. A., Wilson, I. B. H., Paschinger, K., Wang, L.-X., Iqbal, M., Ghosh, A., Amin, M. N., Smith, B., Brown, S., & Vista, A. (2020). Biochemical Characterization of Oyster and Clam Galectins: Selective Recognition of Carbohydrate Ligands on Host Hemocytes and Perkinsus Parasites. Frontiers in Chemistry, 8, 98. https://doi.org/10.3389/fchem.2020.00098</p>
        </div>
      </div>

      <div id="Acknowledgements" className="outline-3">
        <h2>Acknowledgements</h2>
        <div className="outline-text-3">
          <p>Mapping the Edges of Mass Spectral Prediction: Evaluation of Machine Learning EIMS Prediction for Xeno Amino Acids Sean M. Brown, Evan Allgair, and Robin Kryštůfek Analytical Chemistry 2025 97 (19), 10282-10288 DOI: 10.1021/acs.analchem.5c00286 </p>
        </div>
      </div>

      <div id="teaching" className="outline-3">
        <h2>Teaching</h2>
        <table>
          <tbody>
            <tr>
              <td>CAPSTONE Coordinator</td>
              <td className="right-align">January 2025 - August 2025</td>
            </tr>
            <tr><td className="left-align">Stephen Freeland, Interim Vice-Provost: University of Maryland, Baltimore County</td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>Teaching Assistant: Linear Algebra</td>
              <td className="right-align">August 2025 - Present</td>
            </tr>
            <tr><td className="left-align">Osman Guler, Daniel Reynolds: University of Maryland, Baltimore County</td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>CRLA Certified Tutor</td>
              <td className="right-align">August 2025 - Present</td>
            </tr>
            <tr><td className="left-align">Academic Success Center: University of Maryland, Baltimore County</td></tr>
            <tr>
              <td colSpan="3">
                <ul>
                  MATH 151
                  <b> Calculus and Analytic Geometry I</b>
                </ul>
                <ul>
                  MATH 152
                  <b> Calculus and Analytic Geometry II</b>
                </ul>
                <ul>
                  MATH 251
                  <b> Multivariate Calculus</b>
                </ul>

                <ul>
                  MATH 221
                  <b> Linear Algebra</b>
                </ul>

                <ul>
                  MATH 225
                  <b> Differential Equations</b>
                </ul>

                <ul>
                  MATH 300
                  <b> Mathematical Reasoning</b>
                </ul>

                <ul>
                  CMSC 201
                  <b> Computer Science I</b>
                </ul>
                <ul>
                  CMSC 202
                  <b> Computer Science II</b>
                </ul>
                <ul>
                  CMSC 341
                  <b> Data Structures</b>
                </ul>
                <ul>
                  CMSC 203
                  <b> Discrete Structures</b>
                </ul>
                <ul>
                  BIO 141
                  <b> Foundations of Biology</b>
                </ul>
                <ul>
                  PHYS 121
                  <b> Introductory Physics</b>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>


        <table>
          <tbody>
            <tr>
              <td>Freelance Tutor</td>
              <td className="right-align">January 2025 - Present</td>
            </tr>
            <tr><td className="left-align">Varsity Tutors</td></tr>
            <tr>
              <td colSpan="3">
                <ul>
                  Tutored all previously listed courses including:
                </ul>
                <ul>
                  CHEM 101
                  <b> Principles of Chemistry I</b>
                </ul>
                <ul>
                  CHEM 102
                  <b> Principles of Chemistry II</b>
                </ul>
                <ul>
                  CHEM 300
                  <b> Analytical Chemistry</b>
                </ul>
                <ul>
                  CHEM 351 
                  <b> Organic Chemistry I</b>
                </ul>
                <ul>
                  CHEM 352
                  <b> Organic Chemistry II</b>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="skills" className="outline-2">
        <h2>Skills</h2>
        <div className="outline-text-2">
          <ul>
            <li>Languages: Python 3, C++17, Matlab, C, Lua, Bash, LaTeX, Rust</li>
            <li>Libraries: pandas, NumPy, Matplotlib, PyTorch, Seaborn, ncurses, Raylib</li>
            <li>Operating Systems: Windows, Linux</li>
            <li>Other: SWARM, HPC, CNN, DBSCAN, t-SNE, PCA, Docker, Ansible, Stow, Selenium, AlphaFold 2, BeautifulSoup</li>
          </ul>
        </div>
      </div>

      <div id="projects" className="outline-2">
        <h2>Projects</h2>
        <div className="outline-text-2">
          <ul>
            <li>portfolio.me (<a href="https://github.com/arenvista/portfolio">link</a>): Developed a personal portfolio website utilizing a React frontend and Node backend, hosted on AWS.</li>
            <li>Game of Life (<a href="https://github.com/arenvista/game_of_life">link</a>): Simulated Conway's Game of Life in C++ utilizing the Raylib library.</li>
            <li>ChessC++ (<a href="https://github.com/arenvista/chess">link</a>): Constructed a command-line Chess engine in C++ utilizing Ncurses.</li>
            <li>TextEdit (<a href="https://github.com/arenvista/textedit">link</a>): Created a terminal-based text editor in C++ utilizing Ncurses.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};
