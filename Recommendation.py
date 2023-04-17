import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity


ratings = pd.read_csv('ratings.csv')


item_sim_matrix = cosine_similarity(ratings.T)

# Define a function to get the top-n similar items
def get_similar_items(item_id, top_n=5):
    item_idx = ratings.columns.get_loc(item_id)
    similar_items = item_sim_matrix[item_idx].argsort()[::-1][1:top_n+1]
    return ratings.columns[similar_items]

def make_recommendations(user_id, top_n=5):
    user_ratings = ratings.loc[user_id]
    unrated_items = user_ratings[user_ratings.isna()].index
    if len(unrated_items) > 0:
        item_scores = []
        for item in unrated_items:
            similar_items = get_similar_items(item)
            similar_ratings = ratings.loc[user_id, similar_items]
            item_score = similar_ratings.mean()
            item_scores.append((item, item_score))
        recommendations = sorted(item_scores, key=lambda x: x[1], reverse=True)[:top_n]
        return [r[0] for r in recommendations]
    else:
        return []

# Make recommendations for a sample user
user_id = 123
recommendations = make_recommendations(user_id)
print(recommendations)
