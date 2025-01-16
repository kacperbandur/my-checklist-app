# Checklista App

## Kurs

Testowanie i Jakość Oprogramowania

## Autor

Kacper Bańdur

## Temat projektu

Aplikacja "Checklista" – zarządzanie zadaniami w React Native

## Opis projektu

"Checklista" to aplikacja mobilna stworzona przy użyciu React Native. Pozwala użytkownikom na dodawanie, edytowanie, usuwanie oraz oznaczanie zadań jako ukończone. Główne funkcjonalności obejmują:

- Dodawanie nowych zadań.
- Usuwanie istniejących zadań.
- Oznaczanie zadań jako ukończone.
- Wyświetlanie komunikatów, gdy lista zadań jest pusta.
- Obsługa walidacji danych wejściowych.

## **Instalacja i uruchomienie aplikacji:**

1. **Pobierz projekt:**

   - Skopiuj lub pobierz projekt z repozytorium.

2. **Zainstaluj Node.js:**

   - Pobierz i zainstaluj [Node.js](https://nodejs.org/).
   - Node.js zawiera `npm`, który jest wymagany do instalacji zależności projektu.

3. **Zainstaluj Expo CLI:**

   - W terminalu wpisz następującą komendę, aby zainstalować Expo CLI globalnie:
     ```bash
     npm install -g expo-cli
     ```

4. **Zainstaluj zależności projektu:**

   - W terminalu przejdź do folderu projektu:
     ```bash
     cd folder-z-projektem
     ```
   - Następnie zainstaluj wszystkie wymagane zależności:
     ```bash
     npm install
     ```

5. **Uruchom projekt:**

   - W folderze projektu uruchom serwer deweloperski Expo:
     ```bash
     npx expo start
     ```
   - Po chwili w terminalu lub w przeglądarce pojawi się kod QR.

6. **Uruchom aplikację na telefonie:**
   - Upewnij się, że Twój telefon i komputer są w tej samej sieci Wi-Fi.
   - Otwórz aplikację **Expo Go** na swoim telefonie i zeskanuj kod QR wyświetlony w terminalu lub w przeglądarce.
   - W terminalu pojawią się także inne opcje uruchomienia aplikacji, takie jak:
     - [Budowa wersji deweloperskiej](https://docs.expo.dev/develop/development-builds/introduction/) (development build),
     - [Emulator Androida](https://docs.expo.dev/workflow/android-studio-emulator/),
     - [Symulator iOS](https://docs.expo.dev/workflow/ios-simulator/),
     - **Expo Go**, czyli środowisko testowe umożliwiające szybkie sprawdzanie aplikacji.

## **Testy:**

Testy Jednostkowe 
Lokalizacja [Testy Jednostkowe](/__tests__/Index.test.tsx)

1. renders correctly  
   Cel: Sprawdzanie, czy aplikacja renderuje poprawnie główny nagłówek.  
   Opis: Test sprawdza, czy na ekranie aplikacji pojawia się tekst "Moja Checklista".
2. allows adding a new task  
   Cel: Testowanie możliwości dodawania nowego zadania.  
   Opis: Test symuluje wprowadzenie tekstu "Nowe zadanie" do pola input i naciśnięcie przycisku "Dodaj". Sprawdzamy, czy zadanie zostało dodane do listy zadań.
3. allows deleting a task  
   Cel: Testowanie usuwania zadania z listy.  
   Opis: Po dodaniu zadania "Zadanie do usunięcia", test symuluje naciśnięcie przycisku "Usuń", a następnie sprawdza, czy zadanie zostało usunięte z listy.
4. should not display a deleted task  
   Cel: Sprawdzenie, czy usunięte zadanie nie jest wyświetlane na liście.  
   Opis: Testuje sytuację, w której zadanie "Test usunięcia" jest dodane, a potem usunięte, sprawdzając, czy nie pojawia się po usunięciu.
5. should display a message when there are no tasks  
   Cel: Testowanie, czy pojawia się komunikat "Brak zadań", gdy nie ma żadnych zadań na liście.  
   Opis: Po renderowaniu aplikacji, sprawdzane jest, czy wyświetlany jest odpowiedni komunikat o braku zadań.
6. should display a task as completed when marked  
   Cel: Testowanie oznaczania zadania jako ukończone.  
   Opis: Test dodaje zadanie "Zadanie do oznaczenia" i zmienia stan przełącznika (switch) na "włączony". Sprawdzamy, czy tekst zadania zmienia styl na przekreślony.
7. should not mark a task as completed if the button is not pressed  
   Cel: Sprawdzenie, czy zadanie nie jest oznaczone jako ukończone, jeśli przycisk nie został naciśnięty.  
   Opis: Test dodaje zadanie "Nie zaznaczone zadanie", ale nie zmienia stanu przełącznika, więc tekst zadania nie ma przekreślonego stylu.
8. should have at least one task after adding a new task  
   Cel: Testowanie, czy po dodaniu zadania lista zawiera przynajmniej jedno zadanie.  
   Opis: Test dodaje zadanie "Zadanie do dodania" i sprawdza, czy pojawiło się na liście.
9. should display the correct number of tasks  
   Cel: Testowanie, czy aplikacja wyświetla poprawną liczbę zadań po ich dodaniu.  
   Opis: Test dodaje dwa zadania: "Pierwsze zadanie" i "Drugie zadanie", a następnie sprawdza, czy oba zadania są wyświetlane na liście.
10. should update task input correctly when text is changed  
    Cel: Sprawdzenie, czy pole tekstowe prawidłowo aktualizuje swój stan.  
    Opis: Test wprowadza tekst "Tekst testu" do pola input i sprawdza, czy wartość w polu input została zaktualizowana.

Testy Integracyjne
Lokalizacja [Testy Integracyjne](/__tests__/AppIntegration.test.tsx)

1. renders the main header correctly  
   Cel: Sprawdzanie, czy nagłówek aplikacji "Moja Checklista" jest poprawnie renderowany.  
   Opis: Test sprawdza, czy aplikacja poprawnie renderuje nagłówek "Moja Checklista".
2. allows adding a new task  
   Cel: Testowanie dodawania nowego zadania.  
   Opis: Podobnie jak w teście jednostkowym, testuje dodawanie zadania "Nowe zadanie" do aplikacji.
3. should display an error when input is empty and trying to add a task  
   Cel: Testowanie walidacji formularza przy pustym polu input.  
   Opis: Test sprawdza, czy przycisk "Dodaj" nie pozwala na dodanie pustego zadania i wyświetla komunikat o błędzie: "Pole zadania nie może być puste".
4. allows deleting a task  
   Cel: Testowanie usuwania zadania z listy.  
   Opis: Po dodaniu zadania "Zadanie do usunięcia", testuje usunięcie zadania i sprawdzenie, czy zostało ono usunięte z interfejsu.
5. should display a message when there are no tasks  
   Cel: Sprawdzanie, czy komunikat "Brak zadań" jest wyświetlany, gdy lista jest pusta.  
   Opis: Podobnie jak w teście jednostkowym, test sprawdza, czy aplikacja wyświetla komunikat "Brak zadań", gdy nie ma żadnych zadań.
6. should display a task as completed when marked  
   Cel: Testowanie oznaczania zadania jako ukończone.  
   Opis: Podobnie jak w teście jednostkowym, test sprawdza, czy zadanie zmienia styl na przekreślony, gdy przełącznik jest aktywowany.
7. should not mark a task as completed if the button is not pressed  
   Cel: Testowanie, czy zadanie nie jest oznaczone jako ukończone, jeśli nie zmienimy stanu przełącznika.  
   Opis: Test sprawdza, czy zadanie pozostaje nieoznaczone, jeśli przycisk nie zostanie naciśnięty.
8. should display the correct number of tasks after adding a new task  
   Cel: Sprawdzanie, czy liczba zadań jest poprawna po dodaniu nowych zadań.  
   Opis: Test dodaje dwa zadania ("Zadanie 1" i "Zadanie 2") i sprawdza, czy liczba zadań wynosi 2.
9. should update the task input correctly when text is changed  
   Cel: Sprawdzanie, czy pole tekstowe poprawnie reaguje na zmianę tekstu.  
   Opis: Test zmienia tekst w polu input na "Testowe zadanie" i sprawdza, czy pole zostało zaktualizowane.
10. should not allow a task with duplicate text to be added  
    Cel: Testowanie walidacji unikalności zadań.  
    Opis: Test sprawdza, czy aplikacja nie pozwala na dodanie zadania o tej samej treści, wyświetlając komunikat "Wprowadź unikalne zadanie" w przypadku duplikatu.

Aby uruchomić testy, wpisz:

```bash
npm test
```

## Testy Manualne dla Aplikacji "Checklista"

#### Test 1: Dodawanie nowego zadania

| **ID**                  | **1**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Test dodawania nowego zadania                                                                                |
| **Warunki początkowe**  | Aplikacja jest otwarta.                                                                                      |
| **Kroki testowe**       | 1. W polu "Dodaj nowe zadanie" wprowadź opis zadania (np. "Nowe zadanie"). <br> 2. Kliknij przycisk "Dodaj". |
| **Oczekiwany rezultat** | Zadanie "Nowe zadanie" powinno pojawić się na liście zadań.                                                  |

---

#### Test 2: Walidacja pola zadania (puste pole)

| **ID**                  | **2**                                                                          |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Tytuł**               | Test walidacji pola zadania (puste pole)                                       |
| **Warunki początkowe**  | Aplikacja jest otwarta.                                                        |
| **Kroki testowe**       | 1. Pozostaw pole "Dodaj nowe zadanie" puste. <br> 2. Kliknij przycisk "Dodaj". |
| **Oczekiwany rezultat** | Powinna pojawić się wiadomość o błędzie "Pole zadania nie może być puste".     |

---

#### Test 3: Dodawanie zadania o tej samej treści (duplikat)

| **ID**                  | **3**                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Test dodawania zadania o tej samej treści (duplikat)                                                                                                                                                         |
| **Warunki początkowe**  | Aplikacja jest otwarta.                                                                                                                                                                                      |
| **Kroki testowe**       | 1. Wprowadź opis zadania w polu "Dodaj nowe zadanie" (np. "Zadanie 1"). <br>2. Kliknij przycisk "Dodaj". <br> 3. Ponownie wprowadź ten sam opis zadania (np. "Zadanie 1"). <br> 4. Kliknij przycisk "Dodaj". |
| **Oczekiwany rezultat** | Drugie "Zadanie 1" nie powinno się pojawić, a komunikat o błędzie "Wprowadź unikalne zadanie" powinien się wyświetlić.                                                                                       |

---

#### Test 4: Usuwanie zadania

| **ID**                  | **4**                                                           |
| ----------------------- | --------------------------------------------------------------- |
| **Tytuł**               | Test usuwania zadania                                           |
| **Warunki początkowe**  | Aplikacja jest otwarta, dodano zadanie "Zadanie do usunięcia".  |
| **Kroki testowe**       | 1. Kliknij przycisk "Usuń" obok zadania "Zadanie do usunięcia". |
| **Oczekiwany rezultat** | Zadanie "Zadanie do usunięcia" powinno zniknąć z listy.         |

---

#### Test 5: Komunikat, gdy nie ma żadnych zadań

| **ID**                  | **5**                                           |
| ----------------------- | ----------------------------------------------- |
| **Tytuł**               | Test komunikatu, gdy nie ma żadnych zadań       |
| **Warunki początkowe**  | Aplikacja jest otwarta, lista zadań jest pusta. |
| **Kroki testowe**       | 1. Otwórz aplikację, nie dodając żadnych zadań. |
| **Oczekiwany rezultat** | Powinna pojawić się wiadomość "Brak zadań".     |

---

#### Test 6: Oznaczanie zadania jako ukończonego

| **ID**                  | **6**                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------- |
| **Tytuł**               | Test oznaczania zadania jako ukończonego                                            |
| **Warunki początkowe**  | Aplikacja jest otwarta, dodano zadanie "Zadanie do oznaczenia".                     |
| **Kroki testowe**       | 1. Przełącz przełącznik obok zadania, aby oznaczyć je jako ukończone.               |
| **Oczekiwany rezultat** | Zadanie powinno zostać oznaczone przekreśleniem, co wskazuje, że zostało ukończone. |

---

#### Test 7: Nieoznaczanie zadania jako ukończonego

| **ID**                  | **7**                                                                      |
| ----------------------- | -------------------------------------------------------------------------- |
| **Tytuł**               | Test, gdy zadanie nie zostanie oznaczone jako ukończone                    |
| **Warunki początkowe**  | Aplikacja jest otwarta, dodano zadanie "Nieukończone zadanie".             |
| **Kroki testowe**       | 1. Nie przełączaj przełącznika obok zadania.                               |
| **Oczekiwany rezultat** | Zadanie nie powinno być przekreślone i powinno pozostać w normalnym stylu. |

---

#### Test 8: Dodawanie wielu zadań

| **ID**                  | **8**                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Tytuł**               | Test dodawania wielu zadań                                                                                            |
| **Warunki początkowe**  | Aplikacja jest otwarta.                                                                                               |
| **Kroki testowe**       | 1. Dodaj dwa lub więcej zadań (np. "Zadanie 1", "Zadanie 2"). <br> 2. Sprawdź, czy oba zadania pojawią się na liście. |
| **Oczekiwany rezultat** | Oba zadania ("Zadanie 1", "Zadanie 2") powinny pojawić się na liście.                                                 |

---

#### Test 9: Aktualizacja tekstu w polu zadania

| **ID**                  | **9**                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Test aktualizacji tekstu w polu zadania                                                                                                          |
| **Warunki początkowe**  | Aplikacja jest otwarta.                                                                                                                          |
| **Kroki testowe**       | 1. Wprowadź tekst zadania w polu "Dodaj nowe zadanie" (np. "Testowe zadanie"). <br> 2. Zmień tekst na coś innego (np. "Zaktualizowane zadanie"). |
| **Oczekiwany rezultat** | Pole zadania powinno odzwierciedlać nowy tekst ("Zaktualizowane zadanie").                                                                       |

---

#### Test 10: Aktualizacja listy zadań po usunięciu zadania

| **ID**                  | **10**                                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Tytuł**               | Test aktualizacji listy zadań po usunięciu zadania                                                                                  |
| **Warunki początkowe**  | Aplikacja jest otwarta, dodano zadania "Zadanie 1", "Zadanie 2".                                                                    |
| **Kroki testowe**       | 1. Usuń jedno zadanie (np. "Zadanie 1"). <br> 2. Sprawdź, czy pozostałe zadanie (np. "Zadanie 2") nadal jest wyświetlane na liście. |
| **Oczekiwany rezultat** | Po usunięciu zadania "Zadanie 1" na liście powinno pozostać tylko "Zadanie 2".                                                      |

## **Technologie użyte w projekcie:**

- **React Native**
- **Expo**
- **TypeScript**
- **Testing Library** do testów aplikacji.
