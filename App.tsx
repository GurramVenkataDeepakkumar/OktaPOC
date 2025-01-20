/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createConfig,signInWithBrowser} from '@okta/okta-react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
useEffect(()=>{
  createConfig({
    clientId: '0oa26w2kmumrmRyCy0h8',
    redirectUri: 'com.evernorth.mobile.envoymobile.cigna-oktaciam:/callback',
    scopes: ['openid', 'profile', 'offline_access'],
    discoveryUri: 'https://t.login.cignahealthcare.com',
    requireHardwareBackedKeyStore: false,
    endSessionRedirectUri: 'com.evernorth.mobile.envoymobile.cigna-oktaciam:/logout',
    androidChromeTabColor: '#008080',
    
  });
},[]);
  async function oktaBrowserLogin(){
    try{
      
     

      console.log('enter into okta login:');
      // const response = await signIn({
      //   username:
      //   '85804941201',
      //   password:'Macbook@123'
      // });
      // console.log(response);
    //   signInWithBrowser().then(result => {
    //     console.log(result);
    //   })
    // .catch(error => {
    //   console.log(error);
    // })

   // const authorisationUrl = 'https://{yourOktaDomain}/oauth2/default/v1/authorize?locale=${language}';
      
      const response = await signInWithBrowser({login_hint:'55577788801', });
      
      console.log('sign in response is:',response );

    }
    catch(error){
      console.error('failed to login:', error)
    }
  }

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      <Button title='Okta sign in' onPress={oktaBrowserLogin}/>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
