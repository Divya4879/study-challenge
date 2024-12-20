'use client';

import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import type { StudyChallenge } from '@/types/challenge';

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 20 },
  topic: { marginBottom: 15 },
  topicTitle: { fontSize: 18, marginBottom: 10 },
  subtopic: { fontSize: 12, marginBottom: 5 },
});

const StudyPlanPDF = ({ plan }: { plan: StudyChallenge }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{plan.title}</Text>
      {plan.topics.map((topic, index) => (
        <View key={index} style={styles.topic}>
          <Text style={styles.topicTitle}>{topic.name}</Text>
          {topic.subtopics.map((subtopic, subIndex) => (
            <Text key={subIndex} style={styles.subtopic}>
              • {subtopic}
            </Text>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export function PDFDownloadButton({ plan }: { plan: StudyChallenge }) {
  return (
    <PDFDownloadLink
      document={<StudyPlanPDF plan={plan} />}
      fileName="study-plan.pdf"
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
    >
      {({ loading }) =>
        loading ? 'Preparing PDF...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );
}

