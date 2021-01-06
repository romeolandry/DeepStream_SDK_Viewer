import os
import sys
import random
import string

import hashlib


# create the file .env into src if not exit
DEFAULT_LENGHT = 50
DEFAULT_FILENAME='.env'
DEFAULT_DIR= 'src'
DEFAULT_PATH = os.path.join(os.getcwd(),DEFAULT_DIR,DEFAULT_FILENAME)

DEFAULT_TAG = "SECRET_KEY"

def generate_production_key():
    # generate random string from caracter, digit and punctuation.
    # with lenght DEFAULT_LENGHT choising random 
    generatedString = ''.join(random.choice(string.ascii_uppercase + string.digits + string.punctuation) for _ in range(DEFAULT_LENGHT))

    # encoding this string using  using encode generate an MD5 Obeject
    md5_encoded = hashlib.md5(generatedString.encode())

    # convert it to hexdecimal
    md5_encoder_hexadecimal = md5_encoded.hexdigest()
    
    # prepare to save in to .env
    to_saved = DEFAULT_TAG + ' = ' + '\''+ md5_encoder_hexadecimal + '\'\n'

    text = {
    "comment":"# SECURITY WARNING: keep the secret key used in production secret!\n",
    "SECRET_KEY":to_saved
    }

    with open(DEFAULT_PATH,"a") as f:
        for content in text.values():
            f.write(content) 
    
    print("--------------------------- Generated---------------------------------")

if __name__ == "__main__":
    generate_production_key()