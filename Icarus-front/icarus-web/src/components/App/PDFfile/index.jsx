/* eslint-disable no-unused-vars */
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import icaroLogo from '../../../assets/images/icaro-logo.png';

const styles = StyleSheet.create({
  body: {
    padding: "25 25 0 25"
  },
  image: {
    width: 40,
    height: 40,
    marginTop: -1,
    marginLeft: -1
  },
  upperText: {
    padding: "0 0 30 0",
    border: "1 solid #727376",
    borderRadius: 20
  },
  wagonText: {
    marginTop: 18,
    marginBottom: 18,
    color: "#B7D990",
    fontSize: 14,
    textAlign: "center"
  },
  text: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 12,
    color: "#727376",
    fontSize: 14,
    textAlign: "justify"
  }
})

const PDFfile = (props) => {
  return (
    <Document>
        {props?.text?.map((wagon) => {
          return (
            <Page id={wagon.id} style={styles.body}>
              <View style={styles.upperText}>
                <Image style={styles.image} src={icaroLogo} />
                <Text style={styles.wagonText}>
                    {`Vagón N° ${ wagon.wagonNumValue }`}
                </Text>
                <Text style={styles.text}>
                    {`Tara: ${ wagon.tareValue }`}
                </Text>
                <Text style={styles.text}>
                    {`Bruto: ${ wagon.rawValue }`}
                </Text>
                <Text style={styles.text}>
                    {`Neto: ${ wagon.netValue }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°1: ${ wagon.seal1 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°2: ${ wagon.seal2 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°3: ${ wagon.seal3 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°4: ${ wagon.seal4 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°5: ${ wagon.seal5 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°6: ${ wagon.seal6 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°7: ${ wagon.seal7 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°8: ${ wagon.seal8 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°9: ${ wagon.seal9 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°10: ${ wagon.seal10 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°11: ${ wagon.seal11 }`}
                </Text>
                <Text style={styles.text}>
                    {`Precinto N°12: ${ wagon.seal12 }`}
                </Text>
              </View>
              
            </Page>
          )
        })}
    </Document>
  );
};

export default PDFfile;
