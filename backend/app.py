from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)
model = joblib.load('salary_predictor.joblib')
print("Model loaded successfully!")

def feature_engineering(df):
    seniority_map = {
        'JANITOR': 1, 'JUNIOR': 2, 'SENIOR': 3, 'MANAGER': 4,
        'VICE_PRES': 5, 'CFO': 6, 'CTO': 6, 'CEO': 7
    }
    education_map = {
        'NONE': 0, 'HIGH_SCHOOL': 1, 'HIGH_SCH': 1,
        'BACHELORS': 2, 'BACHELOROF': 2, 'MASTERS': 3,
        'DOCTORAL': 4, 'DOCTORATE': 4, 'DOCTORA': 4
    }
    tech_majors = ['COMPSCI', 'MATH', 'ENGINEERING', 'PHYSICS', 'CHEMISTRY', 'CHEMISTR']

    df['seniority'] = df['jobType'].map(lambda x: seniority_map.get(x, 0))
    df['education'] = df['degree'].map(lambda x: education_map.get(x, 0))
    df['tech_major'] = df['major'].apply(lambda x: 1 if x in tech_majors else 0)
    return df

@app.route('/')
def home():
    return jsonify({"message": "Salary Predictor API is running!"})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_data = {
            'companyId': [data['companyId']],
            'jobType': [data['jobType']],
            'degree': [data['degree']],
            'major': [data['major']],
            'industry': [data['industry']],
            'yearsExperience': [int(data['yearsExperience'])],
            'milesFromMetropolis': [int(data['milesFromMetropolis'])]
        }

        df = pd.DataFrame(input_data)
        df = feature_engineering(df)
        df = df.drop(columns=['jobId'], errors='ignore')

        prediction = model.predict(df)[0]
        # Return as plain number, or add ₹ instead of $
        return jsonify({'predicted_salary': f"₹{prediction:,.2f}"})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
