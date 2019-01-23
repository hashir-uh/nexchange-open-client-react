import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import { I18n } from 'react-i18next';
import styles from './Team.scss';

const Team = () => (
  <I18n ns="translations">
    {t => (
      <div className={styles.container}>
        <div className="container">
          <div className={`${styles.row} row`}>
            <div className="col-xs-12">
              <h2 className="title">{t('about.teamtitle')}</h2>
            </div>

            <TeamMember
              id="phil_orig"
              name="PHIL NOBLE"
              country="IL"
              fullCountryName={t('about.israel')}
              description='MANAGING DIRECTOR'
              social={{
              }}
            />

            <TeamMember
              id="mike_orig"
              name="MIKE SAMALARD"
              country="LT"
              fullCountryName={t('about.lithuania')}
              description= 'FINANCE DIRECTOR'
              social={{
                
              }}
            />

            <TeamMember
              id="evon_orig"
              name="EVON FLETCHER"
              country="LT"
              fullCountryName={t('about.lithuania')}
              description= 'CUSTOMER SERVICE'
              social={{
                
              }}
            />

            <TeamMember
              id="nancy_orig"
              name="NANCY STOKE"
              country="PL"
              fullCountryName={t('about.poland')}
              description='PUBLIC RELATIONS'
              social={{
                // linkedin: 'https://www.linkedin.com/in/baginskapaulina/',
                // twitter: 'https://twitter.com/PaulinaBGGC',
              }}
            />

            <TeamMember
              id="shelly_orig"
              name="SHELLY JOHNSON"
              country="US"
              fullCountryName={t('about.US')}
              description='MARKETING DIRECTOR'
              social={{
                // linkedin: 'https://www.linkedin.com/in/cyrus-ghazanfar-a0998a53/',
                // github: 'https://github.com/cyzanfar',
                // rss: 'https://cyzanfar.github.io/',
                // 'stack-overflow': 'http://stackoverflow.com/users/3307520/cyzanfar',
              }}
            />

            <TeamMember
              id="jeff_mug"
              name="JEFF MUGUTI"
              description='OPERATIONS DIRECTOR'
              social={{
                // linkedin: 'https://www.linkedin.com/in/alejandro-ponce-8551a312/',
                // 'wikipedia-w': 'https://en.wikipedia.org/wiki/Alejandro_Ponce',
              }}
            />
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default Team;
