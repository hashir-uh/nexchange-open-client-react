import React from 'react';
import styles from './About.scss';
import { I18n, Trans } from 'react-i18next';

const About = () => (
  <I18n ns="translations">
    {t => (
      <div id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="title">{t('about.title')}</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <p>{t('about.1')}</p>
              <p>{t('about.2')}</p>
              <p>{t('about.3')}</p>
              <p>{t('about.4')}</p>
              <p>{t('about.5')}</p>
              <p>{t('about.6')}</p>
              <p>{t('about.7')}</p>
              <p>{t('about.8')}</p>
              <p>{t('about.9')}</p>
              <p>{t('about.10')}</p>
              <p>{t('about.11')}</p>
            </div>

            <div className="col-xs-12 col-sm-6">
              
              <p>{t('about.12')}</p>
              <p>{t('about.13')}</p>
              <p>{t('about.14')}</p>
              <p>{t('about.15')}</p>
              <p>{t('about.16')}</p>
              <p>{t('about.17')}</p>
              <p>{t('about.18')}</p>
              <p>{t('about.19')}</p>
              <p>{t('about.20')}</p>
              <p>{t('about.21')}</p>
              <p>{t('about.22')}</p>
              <p>{t('about.23')}</p>
              <p>{t('about.24')}</p>
              <p>{t('about.25')}</p>
              {/* <p>{t('about.5')}</p> */}
              {/* <Trans i18nKey="about.7">
                <p>
                  To support our mission of making crypto accessible to everyone, we’ve made our{' '}
                  <a href="https://github.com/onitsoft/nexchange-open-client-react" target="_blank" rel="noopener noreferrer">
                    front end client completely open source
                  </a>.
                </p>
              </Trans> */}
            </div>
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default About;
