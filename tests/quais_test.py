import os
from quais import app as quais
from quais.extensions import db
import unittest
import tempfile

class QuaisTestCase(unittest.TestCase):
	
	def setUp(self):
		self.db_fd, quais.app.config['DATABASE'] = tempfile.mkstemp()
		quais.app.config['TESTING'] = True
		app = quais.app.test_client()
		quais.configure_db()
		print(app)

	def tearDown(self):
		os.close(self.db_fd)
		#os.unlink(quais.app.config['DATABASE'])

if __name__ == '__main__':
	unittest.main()
