/**
 * Created by imamudinnaseem on 7/21/18
 */
import {Component, h} from "preact";
import "./content.less"


export default class Content extends Component {
    hideNav = (index) => {
        this.setState({
            showNav: false,
            slidingNavLastIndex: index
        });
    }
    showNav = () => {
        this.setState({
            showNav: true
        });
    }

    render(props, state) {
        return (
            <div className="content">
                {/*{state.showNav ? <SlidingNav onNavClick={this.hideNav} slidingNavLastIndex={state.slidingNavLastIndex}/> : null}
                <HamBurger onClick={this.showNav}></HamBurger>
                <Banner></Banner>
                <About></About>
                <Experience></Experience>
                <Skills></Skills>
                <Education></Education>
                <Contact></Contact>*/}
                <div className="leftBar">
                    <div className="about">
                        <div>Hello, I am</div>
                        <div className="name">Ziaul Hoda</div>
                        <div className="role">Human Capacity Development Expert</div>
                        <div className="author"></div>
                    </div>

                    <div>
                        <h2>About me!</h2>
                        <div>
                            <p>I completed my master’s degree programme in 2002 in the subject: Extension Education. I am a married man with 02 kids. In my career spanning 16 years until now, I have worked on human capacity development with a strong focus on competency models and learning solutions. An agile practitioner of social science and human behavior.</p>
                            <p>I firmly believe in values such as: equality, gender and people first and incorporate these in the capacity development processes in a manner that it nurtures self-initiated exploration and learning by the participants.</p>
                        </div>
                    </div>
                    <div>
                        <h2>Skills</h2>
                        <div>
                            <h4>Trained International Project Management expert: </h4>
                            <div>Managed over 4 million Euros worth project in my current role.</div>
                        </div>
                        <div>
                            <h4>Competency Models: </h4>
                            <div>Designed and implemented 03 models covering more than 1000 functionaries.</div>
                        </div>
                        <div>
                            <h4>Human Capacity Development: </h4>
                            <div>Facilitated over 50 organisational Development processes across diverse sector. Facilitation of over 500 learning solutions across industry (civil society, pvt sector, bi/multi-lateral organisations). </div>
                        </div>
                    </div>
                    <div>
                        <h2>For further details</h2>
                       <div>
                           ziaulhoda@gmail.com M: +91 9891512604
                           https://www.linkedin.com/in/ziaul-hoda-23359414/
                       </div>
                    </div>
                </div>
                <div className="rightBar">
                    <div>
                        <h2>PROFESSIONAL ACHIEVEMENT</h2>
                        <div>
                            <h4>Competency models:</h4>
                            <p>Development of competency models for the mid-level as well as senior level bureaucrats of central government officers in Indian government ministries and central departments as well as administrative training Institutes across the country.</p>

                            <ul>
                                <li><h6> At Mid functionary level:</h6> The process involved competency mapping of the functionaries, designing a competency self-assessment online tool, developing competency frameworks, designing of competency-based learning solutions, implementation of inter-modular learning solutions for more than 200 mid-level government functionaries.</li>
                                <li><h6>At senior Bureaucrats level: </h6> Identification of competencies required to perform, defining the identified competencies, developing modules to create learning solutions, developing tools aimed at developing competencies, implementation of the resource pool in the central institution, roll-out of the programme for more than 500 Bureaucrats.</li>
                                <li><h6>Sustainable Development Goals: </h6> c. facilitation of 05 different Training institute through their faculty to help them design competence-based learning solutions around the sustainable development goals. </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Co-creation:</h4>
                            <p>
                                <b>Leading with Passion and Purpose</b> (competence-based learning solutions for Indian Administrative Services Staff as well as Indian Police Services Staff). With the academies of Administration and Police in India, co-created a leadership module named as leading with passion and purpose, incorporating competencies such as: Peoples First, Managing Self, Integrity and Managing Others. The process involved, exchange of the existing modules on leadership, identification of competencies from the National Competence Dictionary, defining competencies, developing learning solutions for each competency.
                            </p>
                        </div>
                        <div>
                            <h4>Agile Learning:</h4>
                            <p>
                                Followed VUCA (Volatility, Uncertainty, Complexity, Ambiguity) concepts to develop Agile learning courses on concepts such as: Workplace effectiveness, Managing International Projects, Managing for Development Results, Participatory Development Processes, Corporate Social Responsibility.
                            </p>
                        </div>
                        <div>
                            <h4>Managing Alumni Network:</h4>
                            <p>
                                Responsible for a global alumni programme called, Alumniportal Deutschland responsible for Alumni in India and Nepal. A total of 4500 Alumni data base. They are all connected through various platforms such as: group mail, mobile based app (WhatsApp group), face to face interaction (twice a year) on recent topics (the one concluded in November was focused on, Role of Culture in Achieving Agenda 2030).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class HamBurger extends Component<{ onClick: Function }> {
    render(props) {
        return (
            <i className="fas fa-bars ham" onClick={props.onClick}></i>
        )
    }
}
