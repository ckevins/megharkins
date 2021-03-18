import React from "react";

export function Resume () {
    return (
        <div className='resume'>
            <div className='flex-container'>
                <div className='resume-left-column'>
                    <div className='resume-div'>
                        <h3>Education & Training</h3>
                            <h4>Kennessaw State University</h4>
                                <p>B.A. in Theatre & Performance Studies, 2017</p>
                                <p>B.S. in Journalism & Citizen Media, 2017</p>
                            <h4>Aurora Theatre</h4>
                                <p>Lawrenceville, GA</p><p>Acting Apprentice 2017-2018</p>
                            <h4>Working Title Playwrights</h4>
                                <p>Atlanta, GA</p>
                                <p>Acting Ensemble Member</p>
                            <h4>Dad's Garage Theatre Company</h4>
                                <p>Atlanta, GA</p><p>Improv Level II & Level III</p>
                    </div>
                </div>
                <div className= 'resume-right-column'>
                    <div className='resume-div regional'>
                        <h3>Regional Theatre</h3>
                        <table>
                            <tr>
                                <td className='show-column'>53% Of*</td>
                                <td className='role-column'>U/S Vicky/Victor/Vivian</td>
                                <td className='company-column'>Alliance Theatre</td>
                                <td>Candis C. Jones</td>
                            </tr>
                            <tr>
                                <td className='show-column'>Ella Enchanted</td>
                                <td className='role-column'>Hattie/Ogre</td>
                                <td className='company-column'>Synchronicity Theatre</td>
                                <td>Jenna Tamisiea Elser</td>
                            </tr>
                            <tr>
                                <td className='show-column'>Cinderella the Remix (tour)</td>
                                <td className='role-column'>Chin Chilla</td>
                                <td className='company-column'>Aurora Theatre</td>
                                <td>Justin Anderson</td>
                            </tr>
                            <tr>
                                <td className='show-column'>The Littlest Christmas Tree</td>
                                <td className='role-column'>Betty Bunny</td>
                                <td className='company-column'>iO Productions</td>
                                <td>Tammy Colucci</td>
                            </tr>
                            <tr>
                                <td className='show-column'>Goosebumps the Musical</td>
                                <td className='role-column'>Tina Powell</td>
                                <td className='company-column'>Aurora Theatre</td>
                                <td>Jaclyn Hofmann Faircloth</td>
                            </tr>
                            <tr>
                                <td className='show-column'>The Threepenny Opera</td>
                                <td className='role-column'>Betty</td>
                                <td className='company-column'>7 Stages</td>
                                <td>Michael Haverty</td>
                            </tr>
                            <tr>
                                <td className='show-column'>Escape to Neverland</td>
                                <td className='role-column'>Liza</td>
                                <td className='company-column'>Deer Bear Wolf</td>
                                <td>Elizabeth Jarrett</td>
                            </tr>
                            <tr>
                                <td className='show-column'>The Fantasticks</td>
                                <td className='role-column'>Luisa</td>
                                <td className='company-column'>Act3 Productions</td>
                                <td>Zip Rampy</td>
                            </tr>
                            <tr>
                                <td className='show-column'>Stories from Planet Earth</td>
                                <td className='role-column'>Storyteller/Musician</td>
                                <td className='company-column'>Atlanta Fringe Festival</td>
                                <td></td>
                            </tr>
                        </table>
                        <p>* Cancelled due to COVID-19</p>
                    </div>
                    <div className='resume-div film'>
                        <h3>Film & Television</h3>
                        <table>
                            <tr>
                                <td className='show-column'>Ain't Leavin'</td>
                                <td className='role-column'>Supporting</td>
                                <td className='company-column'>Loud South Productions</td>
                                <td>Weston Manders</td>
                            </tr>
                            <tr>
                                <td className='show-column'>What the Hell, Carl?</td>
                                <td className='role-column'>Lead</td>
                                <td className='company-column'>SCAD Student Films</td>
                                <td>Nora Long</td>
                            </tr>
                            <tr>
                                <td className='show-column'>Fight For Your Rights Tour</td>
                                <td className='role-column'>Host</td>
                                <td className='company-column'>Atlanta History Center</td>
                                <td>Weston Manders</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
            <div className='resume-div'>
                    <h3>Special Skills</h3>
                    <p>Improvisation, ukulele (beginner), kintting, chess, blacksmithing, historic interpretation, museum tour guid</p>
                    <p>Dialects: Southern, Irish, RP British, Cockney</p>
            </div>
        </div>
    )
}
