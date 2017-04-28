# cortexvortex

This interactive brain viewer allows you to see how different speech sounds are represented in the human brain. The top panel shows the brain from one participant along with electrodes from a 256-channel electrocorticography grid implanted as part of surgical treatment for epilepsy. The bottom panel shows a running spectrogram of sound from either the microphone or pre-recorded sounds. The spectrogram shows what frequencies make up a sound from low at the bottom to high at the top, and also shows how they change over time (from left to right). 

After you click one of the buttons, brain responses are calculated based on models of how the brain responds to the spectrotemporal information present in speech.  These responses are modeled based on real data from one participant who listened to approximately 1 hour of naturally spoken English sentences.  The size of the electrode will increase with the amount of activity in the underlying brain area (<span style="font-size: 24px">bigger</span>=more active). Electrodes that respond to different classes of phonemes are colored differently.

* Electrodes that respond most strongly to <span style="color:rgb(255,0,0)">vowels</span> are colored <span style="color:rgb(255,0,0)">red</span>. 
* Electrodes that respond most strongly to <span style="color: rgb(0,255,0)">fricative</span> phonemes (such as "f", "s", "sh", "ch", and "z") are colored <span style="color:rgb(0,255,0)">green</span>.
* <span style="color:rgb(0,255,255)">Nasals</span> ("n", "m", or "ng") are <span style="color:rgb(0,255,255)">cyan</span>.
* <span style="color:rgb(255,255,0)">Voiced plosives</span> ("b", "d", "g") are in <span style="color:rgb(255,255,0)">yellow</span>, and
* <span style="color:rgb(255,0,255)">unvoiced plosives</span> ("p", "t", "k") are in <span style="color:rgb(255,0,255)">purple</span>.
* <span style="background-color: #e3e3e3; color:rgb(0,0,255)">Liquids and glides</span> ("r", "l", "w", "y") are in <span style="background-color: #e3e3e3; color:rgb(0,0,255)">dark blue</span>.</li> 

Click the microphone button to see predicted responses to your own voice in real time, or click the other buttons to listen to previously recorded example sounds.

For more methodological details, see the <a href="summary.html">short summary here</a>.

Developed by David Chang, Liberty Hamilton, and Morgan Lee at the <a href="http://changlab.ucsf.edu">Laboratory of Edward Chang at UCSF</a>. We thank Roger Anguera Singla of the Gazzaley lab for providing Glass Brain code. Special thanks to Jeramy Morrill and Boris Smus for developing the original <a href="https://musiclab.chromeexperiments.com/Spectrogram">Spectrogram code</a>, and a big thank you to the participants who volunteered their time and made this research possible. Participants provided written informed consent, and all procedures were approved by the UCSF Institutional Review Board.
