import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  backgroundColor: string = '';

  ngOnInit() {
    this.backgroundColor = this.generateColorFromName(this.altText);
  }

  getInitials(): string {
    if (!this.altText) return '';
    return this.altText
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  private generateColorFromName(name: string): string {
    const colors = [
      '#FF6B6B', // red
      '#4ECDC4', // teal
      '#45B7D1', // blue
      '#96CEB4', // green
      '#9B59B6', // purple
      '#F39C12', // orange
      '#3498DB', // bright blue
      '#2ECC71', // emerald
      '#E74C3C', // crimson
      '#1ABC9C'  // turquoise
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash % colors.length);
    return colors[index];
  }
}