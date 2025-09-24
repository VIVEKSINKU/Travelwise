import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";

type Event = {
  date: string;
  note: string;
};

export default function InteractiveCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);

  
  const markedDates = events.reduce((acc, curr) => {
    acc[curr.date] = { marked: true, dotColor: "red" };
    if (curr.date === selectedDate) {
      acc[curr.date].selected = true;
      acc[curr.date].selectedColor = "blue";
    }
    return acc;
  }, {} as any);

  const addEvent = () => {
    if (!selectedDate || !note) return;
    setEvents([...events, { date: selectedDate, note }]);
    setNote("");
  };

  const eventsForSelectedDate = events.filter(e => e.date === selectedDate);

  return (
    <View style={styles.container}>
      <Calendar
        current={new Date().toISOString().split("T")[0]}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
      />

      {selectedDate ? (
        <View style={styles.eventContainer}>
          <Text style={styles.heading}>Events for {selectedDate}</Text>
          <FlatList
            data={eventsForSelectedDate}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.eventItem}>• {item.note}</Text>
            )}
            ListEmptyComponent={<Text>No events</Text>}
          />

          <TextInput
            placeholder="Add a note/event"
            value={note}
            onChangeText={setNote}
            style={styles.input}
          />
          <Button title="Add Event" onPress={addEvent} />
        </View>
      ) : (
        <Text style={{ marginTop: 20, textAlign: "center" }}>Select a date to add events</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: "#f9f9f9" },
  eventContainer: { padding: 20 },
  heading: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  eventItem: { fontSize: 14, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
