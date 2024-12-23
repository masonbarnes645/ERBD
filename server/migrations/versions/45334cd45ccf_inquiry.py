"""-inquiry

Revision ID: 45334cd45ccf
Revises: b6af8c87b7cb
Create Date: 2024-11-15 10:42:29.456289

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '45334cd45ccf'
down_revision = 'b6af8c87b7cb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('inquiries')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('inquiries',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=True),
    sa.Column('email', sa.VARCHAR(), nullable=True),
    sa.Column('message', sa.VARCHAR(), nullable=True),
    sa.Column('subject', sa.VARCHAR(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###
