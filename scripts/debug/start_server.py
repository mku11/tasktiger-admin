from tasktiger_admin.utils import run_admin
import sys

"""
Called by debugpy scripts.
"""
run_admin(sys.argv[1:])