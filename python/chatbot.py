import spacy

nlp = spacy.load("en_core_web_sm")

def extract_entities(text):
    doc = nlp(text)
    entities = [ent.text for ent in doc.ents]
    return entities

def background_experience_chatbot_nlp():
    # ... (other parts of the code remain the same)
    
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            print("ChatBot: Goodbye! Feel free to come back if you have more questions.")
            break

        entities = extract_entities(user_input)
        if "education" in entities:
            response = "I completed my education from XYZ University with a degree in Computer Science."
        elif "experience" in entities:
            response = "I have worked as a Software Engineer at Company A for 3 years and at Company B for 2 years."
        elif "skills" in entities:
            response = "My skills include Python programming, machine learning, web development, and problem-solving."
        elif "projects" in entities:
            response = "I have worked on projects like Project X, Project Y, and Project Z. You can find details on my website."
        else:
            response = "I'm sorry, I don't have information about that topic."

        print("ChatBot:", response)

if __name__ == "__main__":
    background_experience_chatbot_nlp()
