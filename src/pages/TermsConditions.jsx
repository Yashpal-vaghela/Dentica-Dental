import React from "react";
import { Container } from "react-bootstrap";
import "../css/tAndc.css";
import { Link } from "react-router-dom";

const TermsConditions = () => {
    return (
        <div className="about-page-main">
            <div className="pages-banner">
                <div className="pages-banner-sub">
                    <div className="pages-content-box">
                        <h1>Terms & Condition</h1>
                        <ul className="pages-ul">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Container className="mt-4 maintc">

                <p class="tacHeading">Terms and Conditions for Dental Prosthesis Repair or Replacement Warranty</p>
                <p>These terms and conditions ("Terms") govern the warranty provided for the repair or replacement of your dental prosthesis ("Prosthesis"). By utilizing our services, you agree to adhere to these Terms and understand the scope of coverage and limitations outlined herein.</p>

                <p class="tacTitle">1. What Is Covered?</p>
                <p>
                    We offer a warranty for the repair or replacement of your dental prosthesis subject to the conditions stated below. If your Prosthesis is found to be defective due to material or manufacturing faults, we will undertake the necessary repair or replacement, as determined by our expert dental professionals.
                </p>

                <p class="tacTitle">2. What Is Not Covered?</p>
                <p><u>Cash Refund For Prosthesis:</u> We do not provide cash refunds for the Prosthesis. </p>
                <p><u>Cost Incurred for Removal or Insertion:</u> Any expenses associated with the removal or insertion of the Prosthesis are not covered under this warranty. </p>
                <p>Repairs Resulting From Accident, Neglect, Abuse, Failure of Supportive Tooth or Tissue Structure, Improper Dental Hygiene, or Improper Adjustments: The warranty is void in instances where the damage or malfunction of the Prosthesis is caused by accidents, neglect, abuse, failure of supportive tooth or tissue structure, improper dental hygiene, or unauthorized adjustments. </p>
                <p><u>Incidental or Consequential Damages:</u> We shall not be liable for any incidental or consequential damages arising from the use or inability to use the Prosthesis, including but not limited to inconvenience, lost wages, chair-time, or pain and suffering. </p>
                <p><u>Shipping Cost for Repair:</u> The cost of shipping the Prosthesis for repair is not covered by this warranty and shall be the responsibility of the customer. </p>
                <p><u>Dental Fees for Repair and Replacement of Prosthesis:</u> Any dental fees incurred in connection with the repair or replacement of the Prosthesis, including fees charged by the licensed, practicing dentist, are not covered under this warranty. </p>


                <p class="tacTitle">3. Conditions to Be Met for Warranty to Apply</p>
                <p>To avail of the warranty coverage, the following conditions must be met:</p>
                <p>The Prosthesis must be inserted by a licensed and practicing dentist following standard dental practices and protocols.</p>
                <p>Prosthesis Must Be Returned with Old Model and New Impression (Without Change in Tooth Preparation) or Remark Prosthesis: To initiate a warranty claim, the Prosthesis must be returned to us along with the old model and new impression (without any changes in tooth preparation) or, in case of repairs, remark the specific issues to be addressed.</p>


                <p class="tacTitle">4. For warranty claims</p>
                <p>The claimant is required to visit the same dentist as the one initially providing the dental service. This condition is applicable to all warranty claims and must be adhered to in order to qualify for warranty coverage.</p>

                <p class="tacTitle">5. Subject to Surat Court's Jurisdiction Only</p>
                <p>Any disputes or claims arising from or related to this warranty shall be subject to the exclusive jurisdiction of the courts located in Surat, India.</p>

                <p class="tacTitle">6. Terms & Conditions of Warranty Are Subject to Change Without Notice</p>
                <p>Please note that the terms and conditions of this warranty are subject to change without prior notice. It is your responsibility to regularly review the latest version of the warranty terms available on our official website or request a copy from our customer service department.</p>
                <p>By using our services and accepting the Prosthesis repair or replacement, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms, please refrain from using our services. For any queries or concerns regarding the warranty, please contact our customer service team.</p>
                <p class="tacupdate">Last updated: 04-August-2023.</p>



            </Container>
        </div>
    );
};

export default TermsConditions;
